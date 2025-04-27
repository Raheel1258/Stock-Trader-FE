import { cn } from "@/lib/cn";
import { Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const FormFieldContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <Flex className={cn("flex-col gap-y-[4px]", className)}>{children}</Flex>;
};

export { FormFieldContainer };
