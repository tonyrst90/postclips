import React, { useState, useRef } from "react";
import GenderChart from "./AudienceInsights/GenderChart";
import AgeChart from "./AudienceInsights/AgeChart";
import LocationChart from "./AudienceInsights/LocationChart";
import "./AudienceInsights.scss";

const AudienceInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Gender" | "Age" | "Location">("Gender");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isSwipeRef = useRef<boolean>(false);

  const tabs: Array<"Gender" | "Age" | "Location"> = ["Gender", "Age", "Location"];

  const handleSwipe = () => {
    const swipeThreshold = 30; // Reduced threshold for easier swiping
    const swipeDistance = touchStartX.current - touchEndX.current;
    
    if (Math.abs(swipeDistance) < swipeThreshold) return;

    setIsTransitioning(true);
    
    setTimeout(() => {
      const currentIndex = tabs.indexOf(activeTab);
      
      if (swipeDistance > 0) {
        // Swipe left - next tab
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      } else {
        // Swipe right - previous tab
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex]);
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 100);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwipeRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    const swipeDistance = Math.abs(touchStartX.current - touchEndX.current);
    if (swipeDistance > 5) {
      isSwipeRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (isSwipeRef.current) {
      handleSwipe();
    }
    isSwipeRef.current = false;
  };

  const renderChart = () => {
    switch (activeTab) {
      case "Gender":
        return <GenderChart />;
      case "Age":
        return <AgeChart />;
      case "Location":
        return <LocationChart />;
      default:
        return null;
    }
  };

  return (
    <div className="audience-insights">
      <div className="audience-insights__tabs">
        {["Gender", "Age", "Location"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div 
        className={`audience-insights__content ${isTransitioning ? 'transitioning' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {renderChart()}
      </div>
    </div>
  );
};

export default AudienceInsights;
