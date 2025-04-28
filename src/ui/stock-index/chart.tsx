import * as api from "@/lib/api";
import { StockData, StockDataResponse } from "@/types";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
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
import { format } from "date-fns";

const StockIndexChart = ({
  symbolId,
  symbol,
}: {
  symbolId: string;
  symbol: string;
}) => {
  const { data, isLoading } = useQuery<StockDataResponse, unknown, StockData[]>(
    {
      queryKey: [`stock-chart-${symbolId}`],
      queryFn: () =>
        api.POST<StockDataResponse>(api.SEARCH_STOCKS_DATA, {
          symbolId,
          startDate: "2025-03-01",
          endDate: "2025-05-05",
        }),
      select: (data) => {
        return data.response.historicalData.map((item) => ({
          ...item,
        }));
      },
    }
  );

  return (
    <Flex justify="center" flexGrow="1" align="center">
      {isLoading ? (
        <Text>Loading data</Text>
      ) : (
        <>
          <Heading>{symbol}</Heading>
          <ResponsiveContainer width="85%" height={450}>
            <LineChart data={data}>
              <span>{symbol}</span>
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
                labelFormatter={(value) =>
                  format(new Date(value), "MMM d, yyyy")
                }
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
                dot={false}
                activeDot={{ r: 6, stroke: "#047857", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </Flex>
  );
};

export { StockIndexChart };
