"use client";

import { clearAuthCookies } from "@/actions";
import { logout } from "@/lib/firebase";
import { Avatar, DropdownMenu, Flex } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileDropdown = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      clearAuthCookies();
      router.push("/login");
    },
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="cursor-pointer">
        <Flex align="center" gapX="1">
          <Avatar fallback={<User />} radius="full" />
          <DropdownMenu.TriggerIcon />
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => mutate()}>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { ProfileDropdown };
