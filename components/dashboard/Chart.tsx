"use client";

import React, { useMemo } from "react";
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
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

interface ChartProps {
  dates: string[];
  scoreData: number[];
}

const normalizeScore = (score: number) => {
  return Math.min(Math.max(score, 0), 10);
};

const BarTimeChart = ({ dates, scoreData }: ChartProps) => {
  const chartData = useMemo(() => {
    return dates.map((date, i) => ({
      name: `${date} #${i + 1}`,
      score: normalizeScore(scoreData[i] ?? 0),
      display: `${scoreData[i]?.toFixed(1) ?? "0"}/10`,
    }));
  }, [dates, scoreData]);

  const bgColor = "var(--card)";
  const gridColor = "var(--border)";
  const textColor = "var(--foreground)";
  const mutedColor = "var(--foreground-1)";
  const accentColor = "var(--accent)";

  return (
    <motion.div
      className="w-full h-[300px]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
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
            tick={{ fill: mutedColor }}
          />
          <YAxis
            domain={[0, 10]}
            type="number"
            ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            stroke={mutedColor}
            style={{ fontSize: "12px", fill: mutedColor }}
            tickFormatter={(value) => `${value}`}
            tick={{ fill: mutedColor }}
          />
          <Tooltip
            formatter={(value, name, { payload }) => {
              return payload?.display ?? "0/10";
            }}
            contentStyle={{
              backgroundColor: bgColor,
              border: `1px solid ${gridColor}`,
              borderRadius: "8px",
              color: textColor,
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            labelStyle={{
              color: accentColor,
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
            itemStyle={{
              color: textColor,
            }}
            cursor={{ fill: accentColor, opacity: 0.1 }}
          />
          <Bar
            dataKey="score"
            radius={[4, 4, 0, 0]}
            name="Score"
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {chartData.map((_, i) => (
              <Cell key={`cell-${i}`} fill={accentColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default BarTimeChart;
