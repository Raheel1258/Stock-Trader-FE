import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

// const FormFieldError = ({ error }: { error?: string }) => {
//   return error ? <Text color='tomato'>{error}</Text> : null;
// };

const FormFieldError = ({ children }:PropsWithChildren) => {
    return <Text color='tomato'>{children}</Text>
  };

export { FormFieldError };
