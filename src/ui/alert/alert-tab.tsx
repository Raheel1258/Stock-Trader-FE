"use client";

import { Tabs } from "@radix-ui/themes";
import { AlertForm } from "./new-alert-tab";
import { ViewAlert } from "./view-alert-tab";
import { useState } from "react";
import { TabValue } from "./new-alert-tab/types";

const AlertTab = () => {
  const [activeTab, setActiveTab] = useState<string>(TabValue.ViewAlert);

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
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
        <AlertForm setActiveTab={setActiveTab} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export { AlertTab };
