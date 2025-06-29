"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "TikTok", value: 1071585, color: "#8A3FFC" },
  { name: "Twitter", value: 765418, color: "#FF7EB6" },
  { name: "Instagram", value: 612335, color: "#FA4D56" },
  { name: "YouTube Shorts", value: 244934, color: "#33B1FF" },
  { name: "Facebook", value: 107158, color: "#FFF1F1" },
];

// Utility function to format numbers with K, M, B suffixes
const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString();
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translate(-50%, -100%)",
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "0.7rem",
          fontWeight: 500,
          pointerEvents: "none",
          zIndex: 1000,
          display: "inline-block",
          textAlign: "center",
          border: "1px solid #00E7FF",
          boxShadow: "0 2px 6px rgba(0, 231, 255, 0.3)",
          whiteSpace: "nowrap",
        }}
      >
        <div>{name}</div>
        <div style={{ color: "#00E7FF", fontWeight: 700 }}>
          ${formatNumber(value)}
        </div>
      </div>
    );
  }

  return null;
};

const BudgetAllocationCard: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const total = data.reduce((sum, d) => sum + d.value, 0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="budget-card">
      <p className="budget-card__title">Budget estimation</p>
      <p className="budget-card__value">${formatNumber(total)}</p>

      <div className="budget-card__content">
        <ul className="budget-card__legend">
          {data.map((entry) => (
            <li key={entry.name}>
              <span
                className="budget-card__dot"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name}
            </li>
          ))}
        </ul>

        {isClient ? (
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={60}
                innerRadius={0}
                paddingAngle={2}
                stroke="#000000"
                strokeWidth={0.5}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ width: 120, height: 120 }} />
        )}
      </div>
    </div>
  );
};

export default BudgetAllocationCard;
