import {
  FormFieldContainer,
  FormFieldLabel,
  FormTextInput,
} from "@/components/form";
import { FormFieldError } from "@/components/form/form-field-error";
import { ErrorMessage } from "formik";

const ThresholdInput = ({ name }: { name: string }) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel>Threshold</FormFieldLabel>
      <FormTextInput name={name} />
      <ErrorMessage name={name} component={FormFieldError} />
    </FormFieldContainer>
  );
};

export { ThresholdInput };
