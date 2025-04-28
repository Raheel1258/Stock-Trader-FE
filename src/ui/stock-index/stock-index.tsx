"use client";

import * as api from "@/lib/api";
import { AvailableStock, AvailableStockResponse } from "@/types";
import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { StockIndexCard } from "./stock-index-card";
import { StockIndexChart } from "./chart";
import { useState } from "react";

const StockIndexView = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["available-symbols"],
    queryFn: () => api.GET<AvailableStockResponse>(api.GET_AVAILABLE_SYMBOLS),
  });
  const [currentSymbol, setCurrentSymbol] = useState<
    AvailableStock | undefined
  >(undefined);

  if (isLoading) {
    return (
      <Flex justify="center">
        <Text>Loading</Text>
      </Flex>
    );
  }

  return (
    <Flex px="4" gap="4" direction="column" flexGrow="1">
      <Flex justify="center" gapY="4" gapX="8" wrap="wrap">
        {data?.response.map((availableStock) => (
          <StockIndexCard
            key={availableStock.symbolId}
            availableStock={availableStock}
            onSelect={setCurrentSymbol}
          />
        )) ?? <Text>No stocks found</Text>}
      </Flex>
      {data?.response.length ? (
        <StockIndexChart
          symbolId={currentSymbol?.symbolId ?? data.response[0].symbolId}
          symbol={currentSymbol?.symbol ?? data.response[0].symbol}
        />
      ) : null}
    </Flex>
  );
};

export { StockIndexView };
