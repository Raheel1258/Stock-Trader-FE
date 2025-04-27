import { Flex, Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const FormFieldLabel = ({
  children,
  required,
}: PropsWithChildren<{ required: boolean }>) => {
  return (
    <Flex gap="1">
      <Text>{children}</Text>
      {required && <Text color="red">*</Text>}
    </Flex>
  );
};

export { FormFieldLabel };
