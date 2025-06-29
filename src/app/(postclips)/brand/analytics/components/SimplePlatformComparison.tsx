"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import styles from "./SimplePlatformComparison.module.scss";

interface SimplePlatformComparisonProps {
  className?: string;
}

// Chart data - smooth curve for performance visualization
const chartData = [
  { views: 0, performance: 0 },
  { views: 500000, performance: 338000 }, // YouTube point
  { views: 1000000, performance: 402000 }, // Facebook point
  { views: 1500000, performance: 410000 }, // TikTok point
  { views: 2000000, performance: 414000 }, // Instagram point
  { views: 2500000, performance: 514000 }, // X point
  { views: 2500000, performance: 2400000 }, // PostClips highlight
];

// Platform data with exact Figma specifications
const platformData = [
  { 
    platform: "YouTube", 
    views: "338K",
    xValue: 500000, // X position on chart where dot appears
    color: "#FF0000",
    icon: "▶", // YouTube play icon
    bgColor: "#FF0000"
  },
  { 
    platform: "Facebook", 
    views: "402K",
    xValue: 1000000,
    color: "#1877F2",
    icon: "f", // Facebook icon
    bgColor: "#1877F2"
  },
  { 
    platform: "TikTok", 
    views: "410K",
    xValue: 1500000,
    color: "#FF0050",
    icon: "♫", // TikTok music note
    bgColor: "#FF0050"
  },
  { 
    platform: "Instagram", 
    views: "414K",
    xValue: 2000000,
    color: "#E4405F",
    icon: "📷", // Instagram camera
    bgColor: "#E4405F"
  },
  { 
    platform: "X", 
    views: "514K",
    xValue: 2500000,
    color: "#000000",
    icon: "𝕏", // X logo
    bgColor: "#000000"
  },
];

// Calculate vertical stacking positions (Figma style)
const calculateVerticalStackPositions = () => {
  const leftOffsetPercent = 15; // Fixed left position for all badges
  const topStartPercent = 75; // Start from bottom
  const verticalSpacing = 11; // Space between badges (matching Figma)
  
  // Sort platforms by performance value for proper stacking
  const sortedPlatforms = [...platformData].sort((a, b) => 
    parseInt(a.views.replace('K', '')) - parseInt(b.views.replace('K', ''))
  );
  
  return sortedPlatforms.map((platform, index) => {
    const yPosition = topStartPercent - (index * verticalSpacing);
    
    // Calculate the exact X position on the chart for the connection line
    const maxXValue = 2500000;
    const chartLeftMargin = 5; // Chart area starts here
    const chartWidth = 80; // Usable chart width
    const dotXPercent = chartLeftMargin + (platform.xValue / maxXValue) * chartWidth;
    
    return {
      ...platform,
      labelX: leftOffsetPercent,
      labelY: yPosition,
      dotX: dotXPercent,
      dotY: yPosition, // For simplicity, align horizontally (will adjust based on actual curve)
    };
  });
};

const stackedPlatforms = calculateVerticalStackPositions();

const formatValue = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return value.toString();
};

const formatXAxisValue = (value: number) => {
  if (value === 0) return "0";
  if (value >= 1000000) return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return value.toString();
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "rgba(30, 30, 30, 0.95)",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "8px 12px",
        color: "white",
        fontSize: "12px",
        backdropFilter: "blur(10px)",
      }}>
        <p style={{ margin: 0, color: "#a0a0a0" }}>
          Views: {formatXAxisValue(label)}
        </p>
        <p style={{ margin: "4px 0 0 0", color: "#00f0ff" }}>
          Performance: {formatValue(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

// Platform badge component with proper styling
const PlatformBadge: React.FC<{
  platform: string;
  views: string;
  color: string;
  icon: string;
  bgColor: string;
  labelX: number;
  labelY: number;
  dotX: number;
  dotY: number;
}> = ({ platform, views, color, icon, bgColor, labelX, labelY, dotX, dotY }) => {
  return (
    <>
      {/* Connection line from badge to chart point */}
      <div
        className={styles.connectionLine}
        style={{
          position: "absolute",
          left: `${labelX + 12}%`, // Start from right edge of badge
          top: `${labelY + 1.2}%`, // Center vertically with badge
          width: `${dotX - labelX - 12}%`,
          height: "1px",
          borderTop: "1px dotted #888",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      
      {/* Platform badge */}
      <div
        className={styles.platformBadge}
        style={{
          position: "absolute",
          left: `${labelX}%`,
          top: `${labelY}%`,
          zIndex: 5,
        }}
      >
        <div
          className={styles.badgeContent}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#1a1a1a",
            border: `1.5px solid ${color}`,
            borderRadius: "6px",
            padding: "4px 8px",
            fontSize: "12px",
            fontWeight: "600",
            color: "#ffffff",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <span
            className={styles.platformIcon}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "16px",
              height: "16px",
              borderRadius: "3px",
              backgroundColor: bgColor,
              color: "#ffffff",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {icon}
          </span>
          <span className={styles.platformViews}>{views}</span>
        </div>
      </div>
    </>
  );
};

const SimplePlatformComparison: React.FC<SimplePlatformComparisonProps> = ({ 
  className = "" 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`${styles.comparisonContainer} ${className}`}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>
          Post Clips can generate up to <span className={styles.highlight}>500% more views</span> with the same budget
        </h3>
      </div>

      {/* Chart Container */}
      <div className={styles.chartWrapper}>
        {/* PostClips Hero Badge - positioned at the top right */}
        <div
          className={styles.heroCallout}
          style={{
            position: "absolute",
            top: "12%",
            right: "12%",
            zIndex: 5,
          }}
        >
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>📺</span>
            <span className={styles.heroValue}>2.4M</span>
          </div>
        </div>

        {isClient ? (
          <>
            <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 40, right: 60, left: 20, bottom: 25 }}
            style={{ background: 'transparent' }}
          >
            <defs>
              {/* Gradient for area fill */}
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.4} />
                <stop offset="30%" stopColor="#00f0ff" stopOpacity={0.25} />
                <stop offset="70%" stopColor="#00f0ff" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#00f0ff" stopOpacity={0} />
              </linearGradient>
              
              {/* Glow effect for the line */}
              <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#444"
              strokeOpacity={0.3}
            />
            
            {/* X-Axis */}
            <XAxis
              dataKey="views"
              tickFormatter={formatXAxisValue}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#888", fontSize: 11 }}
            />
            
            {/* Y-Axis - hidden for clean look */}
            <YAxis hide={true} />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Vertical reference lines for each platform */}
            {platformData.map((platform, index) => (
              <ReferenceLine
                key={index}
                x={platform.xValue}
                stroke="#555"
                strokeDasharray="2 4"
                strokeOpacity={0.4}
              />
            ))}

            {/* Area fill under the curve */}
            <Area
              type="linear"
              dataKey="performance"
              stroke="none"
              fill="url(#areaGradient)"
              fillOpacity={1}
              dot={false}
              activeDot={false}
              legendType="none"
              connectNulls={false}
              isAnimationActive={true}
              animationDuration={1500}
            />

            {/* Main glowing curve line */}
            <Line
              type="linear"
              dataKey="performance"
              stroke="#00f0ff"
              strokeWidth={3}
              dot={false}
              activeDot={false}
              legendType="none"
              connectNulls={false}
              filter="url(#lineGlow)"
              strokeLinecap="round"
              strokeLinejoin="round"
              isAnimationActive={true}
              animationDuration={1500}
            />
          </ComposedChart>
        </ResponsiveContainer>

            {/* Platform badges with vertical stacking */}
            {stackedPlatforms.map((platform, index) => (
              <PlatformBadge
                key={index}
                platform={platform.platform}
                views={platform.views}
                color={platform.color}
                icon={platform.icon}
                bgColor={platform.bgColor}
                labelX={platform.labelX}
                labelY={platform.labelY}
                dotX={platform.dotX}
                dotY={platform.dotY}
              />
            ))}
          </>
        ) : (
          <div style={{ width: "100%", height: "100%" }} />
        )}
      </div>
    </div>
  );
};

export default SimplePlatformComparison;
