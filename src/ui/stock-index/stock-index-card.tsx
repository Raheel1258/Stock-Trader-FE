"use client";

import { Flex, Text } from "@radix-ui/themes";
import { ChartLine } from "lucide-react";

const StockIndexCard = ({ name }: { name: string }) => {
  return (
    <Flex
      minWidth={"400px"}
      className="[box-shadow:1_1_6_1_#d1d5db] bg-white rounded-[8px]"
      p="4"
    >
      <Flex direction="column" flexGrow="1" gapY="3">
        <Text className="text-[18px]">{name}</Text>
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
