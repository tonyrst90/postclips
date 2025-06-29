"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

export type CutCorner = "tl" | "tr" | "bl" | "br";

export interface StatCardProps {
  title: string;
  value: string;
  suffix?: string;
  change?: string;
  cutCorners?: CutCorner[];
  icon?: string;
  progress?: number; // 0–100
  progressColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  suffix,
  change,
  cutCorners = [],
  icon,
  progress,
  progressColor = "#00E7FF", // Default to cyan if no color provided
}) => {
  const cutClassNames = cutCorners.map((corner) => `stats-card--cut-${corner}`);
  const hasProgress = typeof progress === "number";

  return (
    <div className={clsx("stats-card", ...cutClassNames)}>
      <p className="stats-card__title">{title}</p>

      {icon && (
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className="stats-card__icon"
          role="presentation"
          priority
        />
      )}

      <div className="stats-card__content">
        <div className="stats-card__value-container">
          <div className="stats-card__value-wrapper">
            <p className="stats-card__value">{value}</p>
            {suffix && <span className="stats-card__value-suffix">{suffix}</span>}
          </div>
        </div>

        {hasProgress ? (
          <div className="stats-card__progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div 
              className="stats-card__progress-fill" 
              style={{ 
                width: `${progress}%`,
                "--progress-color": progressColor 
              } as React.CSSProperties} 
            />
          </div>
        ) : change ? (
          <p className="stats-card__change stats-card__change--increase">
            <span className="percentage-badge">{change}</span>
            <span>this month</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default StatCard;
