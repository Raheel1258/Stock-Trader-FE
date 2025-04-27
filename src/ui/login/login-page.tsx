"use client";

import { register } from "@/lib/firebase/auth";
import { Button, Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { EmailInputField } from "./components";
import { setAuthCookies } from "@/actions";
import { PasswordInputField } from "@/components/form";
import { validationSchema } from "./validtion";

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

const LoginPage = () => {
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      register(data.email, data.password),
    onSuccess: (data) => {
      data.user.getIdToken().then((token) => {
        setAuthCookies(token);
      });
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
          <Heading>Login</Heading>
          <EmailInputField name="email" />
          <PasswordInputField name="password" />
          <Button className="w-[100px]">
            Submit {isPending && <Spinner />}
          </Button>
          {isError && <Text color="tomato">Failed to Login</Text>}
        </Form>
      </Formik>
    </Flex>
  );
};

export { LoginPage };
