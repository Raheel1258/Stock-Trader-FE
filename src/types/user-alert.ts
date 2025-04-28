interface UserAlert {
  _id: string;
  userId: string;
  symbolId: string;
  symbol: string;
  websocketSymbol: string;
  targetPrice: number;
}

interface UserAlertResponse {
  message: string;
  response: UserAlert;
}

export type { UserAlert, UserAlertResponse };
