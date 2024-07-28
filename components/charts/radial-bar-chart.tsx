"use client";

import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    // name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#3ea381",
  },
  {
    // name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#3ea381",
  },
  {
    // name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#3ea381",
  },
  {
    // name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#3ea381",
  },
  {
    // name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#3ea381",
  },
  {
    // name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#3ea381",
  },
  {
    // name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#3ea381",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default class RadialBarCharts extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg";

  render() {
    return (
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="uv"
        />
      </RadialBarChart>
    );
  }
}
