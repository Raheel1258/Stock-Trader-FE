import { TextField } from "@radix-ui/themes";
import { ComponentProps, useState } from "react";

const FormTextInput = ({
  className,
  ...props
}: ComponentProps<typeof TextField.Root>) => {
  const [input, setInput] = useState<string>("");

  return (
    <TextField.Root
      {...props}
      className={className}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export { FormTextInput };
