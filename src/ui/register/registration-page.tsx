"use client";

import { register } from "@/lib/firebase";
import { Button, Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { validationSchema } from "./validation";
import { EmailInputField } from "./components";
import { PasswordInputField } from "@/components/form";
import toast from "react-hot-toast";
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

const RegistrationPage = () => {
  const router = useRouter();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      register(data.email, data.password),
    onSuccess: () => {
      toast.success("Successfully registered");
      router.push("/login");
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
          <Heading>Register yourself</Heading>
          <EmailInputField name="email" />
          <PasswordInputField name="password" />
          <PasswordInputField name="confirmPassword" />
          <Button className="w-[100px]">
            Submit {isPending && <Spinner />}
          </Button>
          {isError && <Text color="tomato">Failed to register</Text>}
          <Link href="/login" className="text-green-1">
            Sign in
          </Link>
        </Form>
      </Formik>
    </Flex>
  );
};

export { RegistrationPage };
