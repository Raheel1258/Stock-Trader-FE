"use client";

import { Tabs } from "@radix-ui/themes";
import { AlertForm } from "./new-alert-tab";
import { ViewAlert } from "./view-alert-tab";

enum TabValue {
  ViewAlert = "view-alerts",
  NewAlerts = "new-alert",
}

const AlertTab = () => {
  return (
    <Tabs.Root defaultValue={TabValue.ViewAlert}>
      <Tabs.List>
        <Tabs.Trigger value={TabValue.ViewAlert}>Your alerts</Tabs.Trigger>
        <Tabs.Trigger value={TabValue.NewAlerts}>
          Create a new alert
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={TabValue.ViewAlert}>
        <ViewAlert />
      </Tabs.Content>
      <Tabs.Content value={TabValue.NewAlerts}>
        <AlertForm />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export { AlertTab };
