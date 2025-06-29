import React from "react";
import "./LocationChart.scss";

const locationData = [
  { country: "United States", percent: 59 },
  { country: "United Kingdom", percent: 5.8 },
  { country: "Canada", percent: 4.5 },
  { country: "India", percent: 3.2 },
  { country: "Other", percent: 27.5 },
];



const LocationChart: React.FC = () => {
  const max = Math.max(...locationData.map(d => d.percent));

  return (
    <div className="location-chart">
      {locationData.map((item, i) => (
        <div className="location-chart__item" key={i}>
          <div className="location-chart__label">{item.country}</div>
          <div className="location-chart__bar-row">
            <div
              className="location-chart__bar"
              style={{ width: `${(item.percent / max) * 100}%` }}
            />
            <div className="location-chart__value">{item.percent}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationChart;
