interface AvailableStock {
  _id: string;
  symbol: string;
  websocketSymbol: string;
}

interface StockData {
  id: string;
  date: {
    $date: string;
  };
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  symbol: string;
}

interface TransformedStockData extends Omit<StockData, "date"> {
  date: string;
}

interface StockDataResponse {
  success: boolean;
  response: {
    historicalData: StockData[];
  };
}

export type {
  AvailableStock,
  StockData,
  TransformedStockData,
  StockDataResponse,
};
