import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/lib/api";
import { UserAlert } from "@/types";

const ViewAlert = () => {
  const { data, error } = useQuery({
    queryKey: ["user-preference"],
    queryFn: () => api.GET<UserAlert[]>(api.GET_USER_ALERTS),
  });

  if (error) {
    return <Text>Failed to fetch alerts</Text>;
  }

  return (
    <Flex direction="column">
      <Text>Subscribed Alerts</Text>
      {data?.map((alert, i) => (
        <Flex key={alert.symbol} justify="between">
          <Text>{i + 1}</Text>
          <Text>{alert.symbol}</Text>
          <Text>{alert.targetPrice}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export { ViewAlert };
