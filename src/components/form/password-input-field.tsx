import { IconButton, TextField } from "@radix-ui/themes";
import { ErrorMessage } from "formik";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import { FormFieldError } from "./form-field-error";
import { FormFieldContainer } from "./form-field-container";
import { FormFieldLabel } from "./form-field-label";
import { FormTextInput } from "./form-text-input";

const PasswordShowHideSlot = ({
  type,
  setType,
}: {
  type: "password" | "text";
  setType: (type: "password" | "text") => void;
}) => {
  const toggleVisibility = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <TextField.Slot side="right">
      <IconButton type="button" onClick={toggleVisibility}>
        {type === "password" ? <EyeIcon /> : <EyeOff />}
      </IconButton>
    </TextField.Slot>
  );
};

const PasswordInputField = ({ name }: { name: string }) => {
  const [type, setType] = useState<"password" | "text">("password");

  return (
    <FormFieldContainer>
      <FormFieldLabel>
        {name === "password" ? "Password" : "Confirm Password"}
      </FormFieldLabel>
      <FormTextInput
        type={type}
        name={name}
        renderSlot={() => (
          <PasswordShowHideSlot setType={setType} type={type} />
        )}
      />
      <ErrorMessage name={name} component={FormFieldError} />
    </FormFieldContainer>
  );
};

export { PasswordInputField };
