"use client";

import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Support Client", value: 20, color: "#42918C" },
  { name: "Ventes et Marketing", value: 22, color: "#A23C52" },
  { name: "Gestion des Sinistres", value: 14, color: "#A23C52" },
  { name: "Tarif et facturation", value: 32, color: "#A23C52" },
  { name: "Tech", value: 10, color: "#42918C" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y - 15}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
      >
        {`${data[index].name}`}
      </text>
      <text
        x={x}
        y={y + 15}
        fill="white"
        textAnchor="middle"
        dominantBaseline="start"
        fontSize={14}
      >
        {`${data[index].value} %`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="150px"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
