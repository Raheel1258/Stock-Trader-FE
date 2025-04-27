"use client";

import * as api from "@/lib/api";
import { AvailableStock } from "@/types";
import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { StockIndexCard } from "./stock-index-card";

const StockIndexView = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["available-symbols"],
    queryFn: () => api.GET<AvailableStock[]>(api.GET_AVAILABLE_SYMBOLS),
  });

  if (isLoading) {
    return (
      <Flex justify="center">
        <Text>Loading</Text>
      </Flex>
    );
  }

  return (
    <Flex px="4" gap="4" justify="center" gapX="8">
      {data?.map((availableStock) => (
        <StockIndexCard key={availableStock._id} name={availableStock.symbol} />
      )) ?? <Text>No stocks found</Text>}
    </Flex>
  );
};

export { StockIndexView };
