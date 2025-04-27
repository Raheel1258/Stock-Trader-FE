"use client";

import * as api from "@/lib/api";
import { AvailableStock } from "@/types";
import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { StockIndexCard } from "./stock-index-card";
import { StockIndexChart } from "./chart";
import { useState } from "react";

const StockIndexView = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["available-symbols"],
    queryFn: () => api.GET<AvailableStock[]>(api.GET_AVAILABLE_SYMBOLS),
  });
  const [currentSymbol, setCurrentSymbol] = useState<string | undefined>(
    undefined
  );

  if (isLoading) {
    return (
      <Flex justify="center">
        <Text>Loading</Text>
      </Flex>
    );
  }

  return (
    <Flex px="4" gap="4" direction='column' flexGrow='1'>
      <Flex justify='center' gapX="8">
        {data?.map((availableStock) => (
          <StockIndexCard
            key={availableStock._id}
            availableStock={availableStock}
            onSelect={setCurrentSymbol}
          />
        )) ?? <Text>No stocks found</Text>}
      </Flex>
      {data?.length ? (
        <StockIndexChart symbolId={currentSymbol ?? data[0].symbol} />
      ) : null}
    </Flex>
  );
};

export { StockIndexView };
