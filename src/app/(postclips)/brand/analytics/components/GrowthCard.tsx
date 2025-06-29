"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

const getFormattedData = () => {
  return [
    { date: "Mar 08", value: 10000000 },
    { date: "", value: 20000000 },
    { date: "", value: 180000000 },
    { date: "", value: 400000000 },
    { date: "", value: 360000000 },
    { date: "", value: 520000000 },
    { date: "", value: 960000000 },
    { date: "", value: 900000000 },
    { date: "Mar 14", value: 890000000 },
  ];
};

const data = getFormattedData();
const maxY = 1000000000;

const GrowthCard: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="growth-card">
      <div className="growth-card__header">
        <p className="growth-card__title">Views growth</p>
        <span className="growth-card__cpm-badge">
          CPM <strong>$1.50</strong>
        </span>
      </div>

      <p className="growth-card__value">838.8M</p>
      <p className="growth-card__change">
        <span className="percentage-badge">+10%</span> this month
      </p>

      <figure
        className="growth-card__chart-wrapper"
        aria-label="Views over time"
      >
        {isClient ? (
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart
              data={data}
              margin={{ top: 5, right: -20, left: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity={0.3} />
                  <stop offset="50%" stopColor="#00F0FF" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="2 2"
                vertical={false}
                stroke="#3f3f46"
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="date"
                tick={{ fill: "#A1A1AA", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                orientation="right"
                domain={[0, maxY]}
                ticks={[0, 200000000, 400000000, 600000000, 800000000, 1000000000]}
                tickFormatter={(v) => {
                  if (v >= 1000000000) {
                    return `${v / 1000000000}B`;
                  }
                  return `${v / 1000000}M`;
                }}
                tick={{ fill: "#A1A1AA", fontSize: 12, dx: 0 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e1e1e",
                  border: "none",
                  color: "#fff",
                }}
                cursor={{ stroke: "#00F0FF", strokeWidth: 1 }}
              />

              {/* Area fill */}
              <Area
                type="linear"
                dataKey="value"
                stroke="none"
                fill="url(#glowGradient)"
                fillOpacity={1}
                isAnimationActive={false}
              />

              {/* Line on top */}
              <Line
                type="linear"
                dataKey="value"
                stroke="#00F0FF"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ width: "100%", height: 200 }} />
        )}

        <figcaption className="visually-hidden">
          Views Growth Over Time
        </figcaption>
      </figure>
    </div>
  );
};

export default GrowthCard;
