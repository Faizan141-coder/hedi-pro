"use client";

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  colere: number;
  joie: number;
  neutre: number;
  triste: number
  surprise: number
}

const data: DataPoint[] = [
  {
    name: "2023-01",
    colere: 4000,
    joie: 2400,
    neutre: 2400,
    triste: 1200,
    surprise: 1300
  },
  {
    name: "2023-03",
    colere: 3000,
    joie: 1398,
    neutre: 2210,
    triste: 1500,
    surprise: 1600,
  },
  {
    name: "2023-05",
    colere: 2000,
    joie: 9800,
    neutre: 2290,
    triste: 4500,
    surprise: 3000,
  },
  {
    name: "2023-07",
    colere: 2780,
    joie: 3908,
    neutre: 2000,
    triste: 2800,
    surprise: 2600,
  },
  {
    name: "2023-09",
    colere: 1890,
    joie: 4800,
    neutre: 2181,
    triste: 1200,
    surprise: 1300,
  },
  {
    name: "2023-11",
    colere: 2390,
    joie: 3800,
    neutre: 2500,
    triste: 4000,
    surprise: 4100
  },
  {
    name: "2024-01",
    colere: 3490,
    joie: 4300,
    neutre: 2100,
    triste: 800,
    surprise: 600
  },
  {
    name: "2024-03",
    colere: 3490,
    joie: 4300,
    neutre: 2100,
    triste: 2600,
    surprise: 2400,
  },
  {
    name: "2024-05",
    colere: 3490,
    joie: 4300,
    neutre: 2100,
    triste: 3200,
    surprise: 3400
  },
];

export default class StackedAreaChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs";

  render() {
    return (
      <ResponsiveContainer height={350}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="colere"
            stackId="1"
            stroke="#2e765e"
            fill="#2e765e"
          />
          <Area
            type="monotone"
            dataKey="joie"
            stackId="1"
            stroke="#a33e60"
            fill="#a33e60"
          />
          <Area
            type="monotone"
            dataKey="neutre"
            stackId="1"
            stroke="#3ea381"
            fill="#3ea381"
          />
          <Area
            type="monotone"
            dataKey="triste"
            stackId="1"
            stroke="#9747ff"
            fill="#9747ff"
          />
          <Area
            type="monotone"
            dataKey="surprise"
            stackId="1"
            stroke="#d8b684"
            fill="#d8b684"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
