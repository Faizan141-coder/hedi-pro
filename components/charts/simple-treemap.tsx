"use client";

import React, { PureComponent } from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

// Define the data structure
const data = [
  { name: "Emotion anger", size: 4 },
  { name: "Emotion fear", size: 3 },
  { name: "Emotion joy", size: 2 },
  { name: "Emotion neutral", size: 1 },
  { name: "Emotion sad", size: 5 },
  { name: "Emotion surprise", size: 6 },
];

const colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
];

const CustomTreemapContent: React.FC<any> = ({
  x,
  y,
  width,
  height,
  index,
  payload,
}) => {
  const color = colors[index % colors.length];

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: color,
          stroke: "#fff",
          strokeWidth: 2,
        }}
      />
      <text>

      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-md">
        <p className="label font-semibold">{`${label}`}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#1f77b4]`}></div>
            <p className="income">Emotion anger</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#ff7f0e]`}></div>
            <p className="expense">Emotion fear</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#2ca02c]`}></div>
            <p className="expense">Emotion joy</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#d62728]`}></div>
            <p className="expense">Emotion neutral</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#9467bd]`}></div>
            <p className="expense">Emotion sad</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className={`h-3 w-3 bg-[#8c564b]`}></div>
            <p className="expense">Emotion surprise</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default class SimpleTreeMap extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/treemap-simple-hslkhr";

  render() {
    return (
      <ResponsiveContainer height={350}>
        <Treemap
          width={400}
          height={200}
          data={data}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          content={<CustomTreemapContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    );
  }
}

