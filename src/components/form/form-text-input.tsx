import { TextField } from "@radix-ui/themes";
import { Field, FieldProps } from "formik";
import { ComponentProps } from "react";

interface FormTextInputProps extends ComponentProps<typeof TextField.Root> {
  name: string;
  renderSlot?: () => React.ReactNode;
}

const FormTextInput = ({ name, renderSlot, ...props }: FormTextInputProps) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) =>
        renderSlot ? (
          <TextField.Root {...field} {...props}>
            {renderSlot()}
          </TextField.Root>
        ) : (
          <TextField.Root {...field} {...props} />
        )
      }
    </Field>
  );
};

export { FormTextInput };
