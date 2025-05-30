import * as Yup from "yup";
const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ''], "Passwords must match")
    .required("Password confirmation is required"),
});

export { validationSchema };
