"use client";

import { AvailableStock } from "@/types";
import { Flex, Text } from "@radix-ui/themes";
import { ChartLine } from "lucide-react";

const StockIndexCard = ({
  availableStock,
  onSelect,
}: {
  availableStock: AvailableStock;
  onSelect?: (selection: string) => void;
}) => {
  const onCardSelect = () => {
    onSelect?.(availableStock._id);
  };

  return (
    <Flex
      minWidth={"400px"}
      className="[box-shadow:1_1_6_1_#d1d5db] bg-white rounded-[8px] hover:cursor-pointer"
      p="4"
      onClick={onCardSelect}
    >
      <Flex direction="column" flexGrow="1" gapY="3">
        <Text className="text-[18px]">{availableStock.symbol}</Text>
        <Text className="text-[24px]" weight="bold">
          5232.42
        </Text>
      </Flex>
      <Flex align="center" justify="center">
        <ChartLine width={50} height={50} color="green" />
      </Flex>
    </Flex>
  );
};

export { StockIndexCard };
