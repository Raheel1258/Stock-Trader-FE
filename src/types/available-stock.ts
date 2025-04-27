interface AvailableStock {
  _id: string;
  symbol: string;
  websocketSymbol: string;
}

interface StockData {
  id: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  symbol: string;
}

export type { AvailableStock, StockData };
