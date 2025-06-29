"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, animate } from "framer-motion";

type CountersProps = {
  step: number;
  labels?: string[];
  earnings?: number;
  clips?: number;
};

export const Counters: React.FC<CountersProps> = ({ step, labels, ...props }) => {
  const [earnings, setEarnings] = useState(props?.earnings || 1200);
  const [clips, setClips] = useState(props?.clips || 280);
  const [displayEarnings, setDisplayEarnings] = useState(earnings);
  const [displayClips, setDisplayClips] = useState(clips);

  const earningsMotion = useMotionValue(earnings);
  const clipsMotion = useMotionValue(clips);

  // Smooth rising number for earnings
  useMotionValueEvent(earningsMotion, "change", (latest) => {
    setDisplayEarnings((prev) => {
      const diff = latest - prev;
      if (Math.abs(diff) < 1) return latest; // snap when close
      return prev + diff * 0.2; // ease in like a counter
    });
  });

  // Still snap clips
  useMotionValueEvent(clipsMotion, "change", (latest) => {
    setDisplayClips(Math.floor(latest));
  });

  useEffect(() => {
    const newEarnings = earnings + Math.floor(Math.random() * Math.min(earnings * 0.15, 1000 * 5000));
    const newClips = clips + 1;

    animate(earningsMotion, newEarnings, {
      duration: 0.8,
      ease: "easeOut",
    });

    animate(clipsMotion, newClips, {
      duration: 0.5,
      ease: "easeOut",
    });

    setEarnings(newEarnings);
    setClips(newClips);
  }, [step]);

  return (
    <div className="slider_counters">
      <div className="earnings-stat-box chipped-top-right slider_counterItem">
        <h2 className="slider_counterLabel">{labels?.at(0) || "Total Earnings"}</h2>
        <motion.p className="slider_counterValue">
          {Math.floor(displayEarnings).toLocaleString()}
        </motion.p>
      </div>
      <div className="earnings-stat-box chipped-top-right slider_counterItem">
        <h2 className="slider_counterLabel">{labels?.at(1) || "Clips Posted"}</h2>
        <motion.p className="slider_counterValue">
          {displayClips.toLocaleString()}
        </motion.p>
      </div>
    </div>
  );
};
