// import * as api from "@/lib/api";
// import { StockData } from "@/types";
import { Flex } from "@radix-ui/themes";
// import { useQuery } from "@tanstack/react-query";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import chartData from "./finnhub.stocks.json";
import { format } from "date-fns";

const transformedData = chartData.map((item) => ({
  date: item.date.$date,
  open: item.open,
  high: item.high,
  low: item.low,
  close: item.close,
  volume: item.volume,
  symbol: item.symbol,
}));

const StockIndexChart = ({ symbolId }: { symbolId: string }) => {
  //   const { data, isLoading } = useQuery({
  //     queryKey: [`stock-chart-${symbolId}`],
  //     queryFn: () => {
  //       console.log("searching");
  //       return api.POST<StockData[]>(api.SEARCH_STOCKS_DATA, {
  //         symbolId,
  //         startDate: "2025-03-28",
  //         endDate: "2025-05-28",
  //       });
  //     },
  //   });

  return (
    <Flex justify="center" flexGrow="1" align="center">
      <ResponsiveContainer width="85%" height={450}>
        <LineChart data={transformedData}>
          <CartesianGrid strokeDasharray="4 4" stroke="#d1fae5" />
          <XAxis
            dataKey="date"
            tickFormatter={(dateStr) => format(new Date(dateStr), "MMM d")}
            tick={{ fontSize: 12, fill: "#065f46" }}
            axisLine={{ stroke: "#6ee7b7" }}
            tickLine={{ stroke: "#6ee7b7" }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#065f46" }}
            axisLine={{ stroke: "#6ee7b7" }}
            tickLine={{ stroke: "#6ee7b7" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ecfdf5",
              borderColor: "#6ee7b7",
              borderRadius: "8px",
            }}
            labelFormatter={(value) => format(new Date(value), "MMM d, yyyy")}
            labelStyle={{ color: "#065f46", fontWeight: "bold" }}
            itemStyle={{ color: "#065f46" }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: "10px", color: "#047857" }}
          />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#10b981"
            strokeWidth={3}
            // dot={{ r: 4, stroke: "#047857", strokeWidth: 2 }}
            dot={false}
            activeDot={{ r: 6, stroke: "#047857", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export { StockIndexChart };
