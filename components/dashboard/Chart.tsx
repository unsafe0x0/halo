"use client";

import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ChartProps {
  dates: string[];
  scoreData: number[];
}

const normalizeScore = (score: number) => {
  return Math.min(Math.max(score, 0), 10);
};

const BarTimeChart = ({ dates, scoreData }: ChartProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const chartData = useMemo(() => {
    return dates.map((date, i) => ({
      name: `${date} #${i + 1}`,
      score: normalizeScore(scoreData[i] ?? 0),
      display: `${scoreData[i]?.toFixed(1) ?? "0"}/10`,
    }));
  }, [dates, scoreData]);

  const paddedMax = 10;

  const bgColor = isDark ? "#1a1a1a" : "#f6f6f6";
  const gridColor = isDark ? "#282828" : "#e2e8f0";
  const textColor = isDark ? "#ffffff" : "#0a0a0a";
  const mutedColor = isDark ? "#f5f5f5" : "#0a0a0a";
  const accentColor = "#7f22fe";

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          barCategoryGap="25%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="name"
            stroke={mutedColor}
            style={{ fontSize: "12px", fill: mutedColor }}
          />
          <YAxis
            domain={[0, 10]}
            type="number"
            ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            stroke={mutedColor}
            style={{ fontSize: "12px", fill: mutedColor }}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            formatter={(value, name, { payload }) => {
              return payload?.display ?? "0/10";
            }}
            contentStyle={{
              backgroundColor: bgColor,
              border: `1px solid ${accentColor}`,
              borderRadius: "8px",
              color: textColor,
            }}
            labelStyle={{
              color: accentColor,
              fontWeight: 600,
            }}
            itemStyle={{
              color: textColor,
            }}
            cursor={{ fill: `${accentColor}20` }}
          />
          <Bar
            dataKey="score"
            radius={[4, 4, 0, 0]}
            name="Score"
            animationDuration={400}
          >
            {chartData.map((_, i) => (
              <Cell key={`cell-${i}`} fill={accentColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarTimeChart;
