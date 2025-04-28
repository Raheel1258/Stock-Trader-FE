"use client";

import { cn } from "@/lib/cn";
import { AvailableStock } from "@/types";
import { Flex, Text } from "@radix-ui/themes";
import { ChartLine } from "lucide-react";

const StockIndexCard = ({
  availableStock,
  onSelect,
}: {
  availableStock: AvailableStock;
  onSelect?: (selection: AvailableStock) => void;
}) => {
  const onCardSelect = () => {
    onSelect?.(availableStock);
  };

  const isPositiveChange = availableStock.priceChangePrevious > 0;
  const symbol = isPositiveChange ? "+" : "";

  return (
    <Flex
      minWidth={"400px"}
      className="[box-shadow:1_1_6_1_#d1d5db] bg-white rounded-[8px] hover:cursor-pointer hover:[box-shadow:2_4_3_1_#d1d5db]"
      p="4"
      onClick={onCardSelect}
    >
      <Flex direction="column" flexGrow="1" gapY="3">
        <Text className="text-[18px]">{availableStock.symbol}</Text>
        <Text className="text-[24px]" weight="bold">
          {availableStock.current}
        </Text>
        <Text
          weight="medium"
          className={cn("text-[#065f46]", {
            "text-[#FF0000]": !isPositiveChange,
          })}
        >
          {`${symbol}${availableStock.priceChangePrevious}`}
          {` (${symbol}${availableStock.percentage}%)`}
        </Text>
      </Flex>
      <Flex align="center" justify="center">
        <ChartLine
          width={50}
          height={50}
          className={cn("text-[#28A745]", {
            "text-[#FF7F7F]": !isPositiveChange,
          })}
        />
      </Flex>
    </Flex>
  );
};

export { StockIndexCard };
