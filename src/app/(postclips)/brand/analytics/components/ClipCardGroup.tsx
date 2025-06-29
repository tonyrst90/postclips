import React from "react";
import ClipCard from "./ClipCard";
import "./ClipCardGroup.scss";
import { TopClip } from "@/Hooks/useAnalytics";

// Utility function to format numbers for display
const formatNumber = (num: number | undefined): string => {
  if (num === undefined || num === null) {
    return "0";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString();
};

interface ClipCardGroupProps {
  topClips?: TopClip[];
  loading?: boolean;
}

const ClipCardGroup: React.FC<ClipCardGroupProps> = ({
  topClips = [],
  loading = false
}) => {
  if (loading) {
    return (
      <div className="clip-group">
        <div className="clip-group__header">
          <h2 className="clip-group__title">
            Clips
            <span className="dot">•</span>
            <span className="date">26,563</span>
          </h2>
          <span className="dot">•</span>
          <span className="date">26,563</span>
        </div>
        <div className="clip-group__list">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100px" }}>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="clip-group">
      <div className="clip-group__header">
        <h2 className="clip-group__title">
          Clips
          <span className="dot">•</span>
          <span className="date">26,563</span>
        </h2>
        <button className="clip-group__view-all">VIEW ALL</button>
      </div>
      <div className="clip-group__list">
        {topClips.length > 0 ? (
          topClips.slice(0, 3).map((clip, index) => (
            <ClipCard
              key={clip.id || index}
              clipUrl={clip.clip_url}
              thumbnailUrl={clip.thumbnail_url || "/assets/icons/analytics/clip.svg"}
              title={clip.campaign_title || "Untitled"}
              views={formatNumber(clip.views)}
              likes={formatNumber(clip.likes)}
              comments={formatNumber(clip.comments)}
            />
          ))
        ) : (
          <div className="text-center py-4" style={{ color: "white" }}>
            No clips data available
          </div>
        )}
      </div>
    </div>
  );
};

export default ClipCardGroup;
