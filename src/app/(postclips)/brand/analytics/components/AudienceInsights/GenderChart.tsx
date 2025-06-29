import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./GenderChart.scss";

const data = [
  { name: "Male", value: 89, color: "#00A3FF" },
  { name: "Female", value: 11, color: "#AEDFFF" },
];

const GenderChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="gender-chart">
      <div className="gender-chart__donut">
        {isClient ? (
          <PieChart width={160} height={100}>
            <Pie
              data={data}
              cx="50%"
              cy="100"
              startAngle={180}
              endAngle={0}
              innerRadius={40}
              outerRadius={60}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        ) : (
          <div style={{ width: 160, height: 100 }} />
        )}
      </div>

      <ul className="gender-chart__legend">
        {data.map((entry) => (
          <li key={entry.name}>
            <span className="dot" style={{ backgroundColor: entry.color }} />
            <span className="label">{entry.name}</span>
            <span className="value">{entry.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenderChart;
