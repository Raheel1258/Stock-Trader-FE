import * as Yup from "yup";

export const validationSchema = Yup.object({
  symbol: Yup.string().required("Stock is required"),
  threshold: Yup.string().required("Threshold is required"),
});
