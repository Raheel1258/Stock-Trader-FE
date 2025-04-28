interface AvailableStock {
  symbolId: string;
  symbol: string;
  websocketSymbol: string;
  close: number;
  current: number;
  date: string;
  group: string;
  high: number;
  low: number;
  open: number;
  percentage: number;
  previousClose: number;
  priceChangePrevious: number;
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

interface AvailableStockResponse {
  success: boolean;
  response: AvailableStock[];
}

export type {
  AvailableStock,
  StockData,
  TransformedStockData,
  StockDataResponse,
  AvailableStockResponse,
};
