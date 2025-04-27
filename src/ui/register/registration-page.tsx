"use client";

import { register } from "@/lib/firebase/auth";
import { Box, Button, Text, TextField } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isError } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      register(data.email, data.password),
    onSuccess: (data) => {
      console.log(data);
      alert("user registered!! yay");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField.Root
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField.Root
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Submit</Button>
        {isError && <Text>Failed to register</Text>}
      </form>
    </Box>
  );
};

export { RegistrationPage };
