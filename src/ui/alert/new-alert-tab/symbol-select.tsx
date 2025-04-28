import { AvailableStockResponse } from "@/types";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/lib/api";
import { ErrorMessage, useFormikContext } from "formik";
import { InitialValues } from "./types";
import { FormFieldContainer, FormFieldLabel } from "@/components/form";
import { FormFieldError } from "@/components/form/form-field-error";

interface SelectOptions {
  label: string;
  value: string;
}

const SymbolSelect = ({ field }: { field: string }) => {
  const { data } = useQuery<AvailableStockResponse, unknown, SelectOptions[]>({
    queryKey: ["available-symbols"],
    queryFn: () => api.GET<AvailableStockResponse>(api.GET_AVAILABLE_SYMBOLS),
    select: (data) =>
      data.response.map((stock) => ({
        label: stock.symbol,
        value: stock.symbolId,
      })),
  });
  const { setFieldValue, values } = useFormikContext<InitialValues>();

  return (
    <Select.Root
      value={values.symbol}
      onValueChange={(value) => {
        setFieldValue(field, value);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        {data ? (
          data?.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))
        ) : (
          <Select.Item value="no-item">No data found</Select.Item>
        )}
      </Select.Content>
    </Select.Root>
  );
};

const SymbolSelectField = ({ name }: { name: string }) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel>Stock</FormFieldLabel>
      <SymbolSelect field={name} />
      <ErrorMessage name={name} component={FormFieldError} />
    </FormFieldContainer>
  );
};

export { SymbolSelectField };
