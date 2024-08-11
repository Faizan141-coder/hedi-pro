"use client";

import React, { PureComponent } from "react";
import { Treemap, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { name: "Emotion anger", size: 15, color: '#1f77b4',  },
  { name: "Emotion fear", size: 20, color: '#ff7f0e' },
  { name: "Emotion joy", size: 20, color: '#2ca02c' },
  { name: "Emotion neutral", size: 15, color: '#d62728' },
  { name: "Emotion sad", size: 10, color: '#9467bd' },
  { name: "Emotion surprise", size: 20, color: '#8c564b' },
];

const CustomTreemapContent: React.FC<any> = ({
  x,
  y,
  width,
  height,
  index,
  payload,
}) => {
  const item = data[index % data.length];

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: item.color,
          stroke: "#fff",
          strokeWidth: 1,
        }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
      >
        {item.name}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + 20}
        textAnchor="middle"
        fill="#fff"
        fontSize="12"
      >
        {`${item.size} %`}
      </text>
    </g>
  );
};

// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white p-3 rounded-md">
//         <p className="label font-semibold">{`${label}`}</p>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#1f77b4]`}></div>
//             <p className="income">Emotion anger</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#ff7f0e]`}></div>
//             <p className="expense">Emotion fear</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#2ca02c]`}></div>
//             <p className="expense">Emotion joy</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#d62728]`}></div>
//             <p className="expense">Emotion neutral</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#9467bd]`}></div>
//             <p className="expense">Emotion sad</p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center w-full">
//           <div className="flex space-x-3 items-center">
//             <div className={`h-3 w-3 bg-[#8c564b]`}></div>
//             <p className="expense">Emotion surprise</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

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
          {/* <Tooltip content={<CustomTooltip />} /> */}
        </Treemap>
      </ResponsiveContainer>
    );
  }
}
