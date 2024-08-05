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
  ratingEvolution: number;
  reviewEvolution: number;
}

const data: DataPoint[] = [
  {
    name: "2023-07",
    ratingEvolution: 600,
    reviewEvolution: 100
  },
  {
    name: "2023-09",
    ratingEvolution: 100,
    reviewEvolution: 200,
  },
  {
    name: "2023-11",
    ratingEvolution: 600,
    reviewEvolution: 570,
  },
  {
    name: "2024-01",
    ratingEvolution: 400,
    reviewEvolution: 390,
  },
  {
    name: "2024-03",
    ratingEvolution: 120,
    reviewEvolution: 500,
  },
  {
    name: "2024-05",
    ratingEvolution: 200,
    reviewEvolution: 420,
  },
];

export default class SourceChart extends PureComponent {
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
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={10} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ratingEvolution"
            stroke="#4a148c"
            fill="#4a148c"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="reviewEvolution"
            stroke="#673ab7"
            fill="#673ab7"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
