"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </div>
  );
};

export default Loading;

// Add this to your global CSS or relevant stylesheet:
/*
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/