"use client";

import { login } from "@/lib/firebase";
import { Button, Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { EmailInputField } from "./components";
import { setAuthCookies } from "@/actions";
import { PasswordInputField } from "@/components/form";
import { validationSchema } from "./validtion";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess: (data) => {
      data.user.getIdToken().then(async (token) => {
        await setAuthCookies(token);
        router.push("/");
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
          <Link href='/register' className='text-green-1'>Register</Link>
        </Form>
      </Formik>
    </Flex>
  );
};

export { LoginPage };
