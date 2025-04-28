"use client";

import { clearAuthCookies } from "@/actions";
import { logout } from "@/lib/firebase";
import { AlertDialog } from "@/ui/alert";
import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      clearAuthCookies();
      router.push("/login");
    },
  });

  return (
    <DropdownMenu.Root modal={true} open={isOpen}>
      <DropdownMenu.Trigger
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Flex align="center" gapX="1">
          <Avatar fallback={<User />} radius="full" />
          <DropdownMenu.TriggerIcon />
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content onPointerDownOutside={() => setIsOpen(false)}>
        <DropdownMenu.Item>
          <AlertDialog>
            <Text>Alerts</Text>
          </AlertDialog>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => mutate()}>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { ProfileDropdown };
