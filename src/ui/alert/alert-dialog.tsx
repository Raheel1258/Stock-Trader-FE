import { Dialog } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import { AlertTab } from "./alert-tab";

const AlertDialog = ({ children }: PropsWithChildren) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Manage your alerts</Dialog.Title>
        <AlertTab />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { AlertDialog };
