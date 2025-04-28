import { Form, Formik } from "formik";
import { validationSchema } from "./validation";
import { InitialValues, TabValue } from "./types";
import { SymbolSelectField } from "./symbol-select";
import { ThresholdInput } from "./threshold-input";
import { useMutation } from "@tanstack/react-query";
import * as api from "@/lib/api";
import { Button } from "@radix-ui/themes";
import toast from "react-hot-toast";

const initialValues: InitialValues = {
  symbol: "",
  threshold: "",
};

const AlertForm = ({
  setActiveTab,
}: {
  setActiveTab: (value: string) => void;
}) => {
  const { mutate } = useMutation({
    mutationFn: ({ symbol, threshold }: InitialValues) =>
      api.POST(api.CREATE_ALERT, {
        symbolId: symbol,
        targetPrice: threshold,
      }),
    onSuccess: () => {
      toast.success("Alert created successfully");
      setActiveTab(TabValue.ViewAlert);
    },
  });
  const onSubmit = (values: InitialValues) => {
    mutate(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-y-[20px]">
        <SymbolSelectField name="symbol" />
        <ThresholdInput name="threshold" />
        <Button>Create</Button>
      </Form>
    </Formik>
  );
};

export { AlertForm };
