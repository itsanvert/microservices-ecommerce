"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
  successfully: {
    label: "Successfully",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
const chartData = [
  { month: "January", total: 186, successfully: 80 },
  { month: "February", total: 305, successfully: 200 },
  { month: "March", total: 237, successfully: 120 },
  { month: "April", total: 73, successfully: 190 },
  { month: "May", total: 209, successfully: 130 },
  { month: "June", total: 214, successfully: 140 },
];
const AppBarChart = () => {
  return (
    <div className="">
      <h1>Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" fill="var(--chart-1)" radius={4} />
          <Bar dataKey="successfully" fill="var(--chart-2)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
