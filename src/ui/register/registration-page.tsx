"use client";

import { register } from "@/lib/firebase/auth";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { validationSchema } from "./validation";
import { EmailInputField, PasswordInputField } from "./components";

interface InitValues {
  email: string;
  password: string;
  confirmPassword: string;
}
const initValues: InitValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationPage = () => {
  const { mutate, isError } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      register(data.email, data.password),
    onSuccess: (data) => {
      console.log(data);
      alert("user registered!! yay");
    },
  });

  const handleSubmit = (values: InitValues) => {
    const { email, password } = values;
    mutate({ email, password });
  };

  return (
    <Flex className="justify-center items-center h-screen">
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-y-[20px] h-[500px] min-w-[50%] justify-center">
          <EmailInputField name="email" />
          <PasswordInputField name="password" />
          <PasswordInputField name="confirmPassword" />
          <Button className="w-[100px]">Submit</Button>
          {isError && <Text color="tomato">Failed to register</Text>}
        </Form>
      </Formik>
    </Flex>
  );
};

export { RegistrationPage };
