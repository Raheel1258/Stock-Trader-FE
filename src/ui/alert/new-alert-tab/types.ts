interface InitialValues {
  symbol: string;
  threshold: string;
}

enum TabValue {
  ViewAlert = "view-alerts",
  NewAlerts = "new-alert",
}

export type { InitialValues };
export { TabValue };
