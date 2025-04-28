import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/lib/api";
import { UserAlertResponse } from "@/types";

const ViewAlert = () => {
  const { data, error } = useQuery({
    queryKey: ["user-preference"],
    queryFn: () => api.GET<UserAlertResponse>(api.GET_USER_ALERTS),
  });

  const alert = data?.response;

  if (error) {
    return <Text>Failed to fetch alerts</Text>;
  }

  return (
    <Flex direction="column" px='8'>
      <Text align="center" weight="bold">
        Subscribed Alert
      </Text>
      <Flex justify="between">
        <Text weight="bold">Stock</Text>
        <Text weight="bold">Threshold</Text>
      </Flex>
      <Flex justify="between">
        <Text>{alert?.symbol ?? ""}</Text>
        <Text>{alert?.targetPrice ?? 0}</Text>
      </Flex>
    </Flex>
  );
};

export { ViewAlert };
