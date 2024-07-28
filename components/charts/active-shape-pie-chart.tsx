"use client";

import React, { PureComponent, ReactElement } from "react";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  PieProps,
  PieLabelRenderProps,
} from "recharts";

interface Data {
  name: string;
  value: number;
  color: string;
}

interface RenderActiveShapeProps extends PieLabelRenderProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: Data;
  percent: number;
  value: number;
}

const data: Data[] = [
  { name: "Joie", value: 400, color: "#867ae5" },
  { name: "Colere", value: 300, color: "#23187a" },
  { name: "Neutre", value: 300, color: "#d7d3f6" },
  { name: "Peur", value: 200, color: "#a33e60" },
  { name: "Tristesse", value: 200, color: "#3ea381" },
  { name: "Surprise", value: 200, color: "#aea6ee" },
];

const renderActiveShape = (props: RenderActiveShapeProps): ReactElement => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    name,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={1}
        textAnchor="middle"
        fill="#000"
        fontWeight="bold"
      >
        10601
      </text>
      <text x={cx} y={cy} dy={18} textAnchor="middle" fill="#000">
        feedbacks
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}

    
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {name}
      </text>
    </g>
  );
};

interface ExampleState {
  activeIndex: number;
}

export default class ActiveShapePieChart extends PureComponent<
  {},
  ExampleState
> {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state: ExampleState = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number): void => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape as PieProps["activeShape"]}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
