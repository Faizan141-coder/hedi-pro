"use client";

import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define the types for the data structure
interface DataPoint {
  category: string;
  value: number;
}

interface Series {
  name: string;
  data: DataPoint[];
  color: string;
}

// Helper function to parse dates in "MM/YYYY" format
const parseDate = (dateStr: string) => {
  const [month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1);
};

// Sort data points by category (date) in ascending order
const sortedSeries = (series: Series[]) => {
  return series.map((s) => ({
    ...s,
    data: s.data.sort(
      (a, b) =>
        parseDate(a.category).getTime() - parseDate(b.category).getTime()
    ),
  }));
};

const series: Series[] = sortedSeries([
  {
    name: "Direct Assurance",
    color: "#1f77b4",
    data: [
      { category: "06/2023", value: 2.7 },
      { category: "07/2023", value: 2.6 },
      { category: "08/2023", value: 2.4 },
      { category: "09/2023", value: 3.6 },
      { category: "10/2023", value: 4.5 },
      { category: "11/2023", value: 4.4 },
      { category: "12/2023", value: 4.35 },
      { category: "01/2024", value: 3.5 },
      { category: "02/2024", value: 3.85 },
      { category: "03/2024", value: 3.9 },
      { category: "04/2024", value: 4.1 },
      { category: "05/2024", value: 3.5 },
      { category: "06/2024", value: 1.25 },
    ],
  },
  {
    name: "MAIF",
    color: "#ff7f0f",
    data: [
      { category: "06/2023", value: 4.0 },
      { category: "07/2023", value: 4.35 },
      { category: "08/2023", value: 3.8 },
      { category: "09/2023", value: 4.45 },
      { category: "10/2023", value: 4.5 },
      { category: "11/2023", value: 4.3 },
      { category: "12/2023", value: 4.32 },
      { category: "01/2024", value: 4.1 },
      { category: "02/2024", value: 4.3 },
      { category: "03/2024", value: 4.15 },
      { category: "04/2024", value: 4.3 },
      { category: "05/2024", value: 4.5 },
      { category: "06/2024", value: 4.5 },
    ],
  },
]);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-md">
        <p className="label font-semibold">{`${label}`}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#1f77b4]`}></div>
            <p className="income">Direct Assurance</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#ff7f0f]`}></div>
            <p className="expense">MAIF</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default class ConcurrentLineChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-multi-series-yyrhrj";

  render() {

    // Extract all values from series data
    const allValues = series.flatMap((s) => s.data.map((d) => d.value));

    // Calculate min and max values
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    // Calculate the domain for YAxis
    const yAxisDomain = [
      Math.floor(minValue / 0.5) * 0.5,
      Math.ceil(maxValue / 0.5) * 0.5,
    ];

    // Generate YAxis ticks dynamically
    const yAxisTicks = [];
    for (let tick = yAxisDomain[0]; tick <= yAxisDomain[1]; tick += 0.5) {
      yAxisTicks.push(tick);
    }

    return (
      <ResponsiveContainer height={400}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis
            dataKey="value"
            domain={yAxisDomain}
            ticks={yAxisTicks}
            tickFormatter={(value) => value.toFixed(1)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {series.map((s) => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.color}
              strokeWidth={3}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
