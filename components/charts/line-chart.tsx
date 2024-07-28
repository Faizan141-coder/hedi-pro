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
    name: "Playstore",
    color: "#a33e60",
    data: [
      { category: "05/2023", value: 4 },
      { category: "06/2023", value: 2 },
      { category: "07/2023", value: 3.5 },
      { category: "08/2023", value: 2.4 },
      { category: "10/2023", value: 5 },
      { category: "11/2023", value: 6.25 },
      { category: "12/2023", value: 2.6 },
      { category: "02/2024", value: 5 },
      { category: "04/2024", value: 4.6 },
      { category: "05/2024", value: 5.8 },
    ],
  },
  {
    name: "Google",
    color: "#9747ff",
    data: [
      { category: "05/2023", value: 3 },
      { category: "06/2023", value: 1 },
      { category: "07/2023", value: 4.5 },
      { category: "08/2023", value: 2.6 },
      { category: "10/2023", value: 2.3 },
      { category: "11/2023", value: 2.15 },
      { category: "12/2023", value: 6.1 },
      { category: "02/2024", value: 0.5 },
      { category: "04/2024", value: 3.5 },
      { category: "05/2024", value: 3.45 },
    ],
  },
  {
    name: "Apple",
    color: "#3339d3",
    data: [
      { category: "05/2023", value: 2 },
      { category: "06/2023", value: 6 },
      { category: "07/2023", value: 3.5 },
      { category: "08/2023", value: 5.4 },
      { category: "10/2023", value: 1.6 },
      { category: "11/2023", value: 4.25 },
      { category: "12/2023", value: 6.6 },
      { category: "02/2024", value: 2 },
      { category: "04/2024", value: 4.3 },
      { category: "05/2024", value: 5.8 },
    ],
  },
  {
    name: "Trust Pilot",
    color: "#3ea381",
    data: [
      { category: "05/2023", value: 1 },
      { category: "06/2023", value: 2 },
      { category: "07/2023", value: 1.5 },
      { category: "08/2023", value: 1.4 },
      { category: "10/2023", value: 1 },
      { category: "11/2023", value: 1.25 },
      { category: "12/2023", value: 1.6 },
      { category: "02/2024", value: 5 },
      { category: "04/2024", value: 4.3 },
      { category: "05/2024", value: 2.8 },
    ],
  },
]);

interface CombinedData {
  category: string;
  [key: string]: number | string | null;
}

export default class EvolutionLineChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-multi-series-yyrhrj";

  render() {
    return (
      <ResponsiveContainer height={400}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip />
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
