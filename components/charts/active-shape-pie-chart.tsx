"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

interface Data {
  name: string;
  value: number;
  color: string;
}

const data: Data[] = [
  { name: "Joie", value: 400, color: "#867ae5" },
  { name: "Colere", value: 300, color: "#23187a" },
  { name: "Neutre", value: 300, color: "#d7d3f6" },
  { name: "Peur", value: 200, color: "#a33e60" },
  { name: "Tristesse", value: 200, color: "#3ea381" },
  { name: "Surprise", value: 200, color: "#aea6ee" },
];

export default class ActiveShapePieChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              value="10601"
              position="center"
              fill="#000"
              dy={-10}
              fontWeight="bold"
              style={{ fontSize: "20px" }}
            />
            <Label
              value="feedbacks"
              position="center"
              dy={10}
              fill="#000"
              style={{ fontSize: "16px" }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
