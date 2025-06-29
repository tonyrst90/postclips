import React from "react";
import "./AgeChart.scss";

const ageData = [
  { label: "25–34", woman: 18.5, man: 30.3, total: 48.8 },
  { label: "35–44", woman: 23.1, man: 13.1, total: 36.2 },
  { label: "45–54", woman: 6.9, man: 2.4, total: 9.3 },
  { label: "Others", woman: 3.5, man: 2.4, total: 5.9 },
];

const AgeChart: React.FC = () => {
  return (
    <div className="age-chart">
      <div className="age-chart__legend">
        <div>
          <span className="dot woman" /> 
          <span><span className="percentage">38%</span> Woman</span>
        </div>
        <div>
          <span className="dot man" /> 
          <span><span className="percentage">62%</span> Man</span>
        </div>
      </div>

      <div className="age-chart__bars">
        {ageData.map((item, index) => {
          const total = item.woman + item.man;
          const womanPercent = (item.woman / total) * 100;
          const manPercent = (item.man / total) * 100;
          const maxTotal = Math.max(...ageData.map((d) => d.total));

          return (
            <div className="age-chart__row" key={index}>
              <div className="age-chart__label">{item.label}</div>
              <div className="age-chart__bar-container">
                <div className="age-chart__bar-track">
                  <div
                    className="age-chart__bar-group"
                    style={{ width: `${(item.total / maxTotal) * 100}%` }}
                  >
                    <div
                      className="bar woman"
                      style={{
                        width: `${womanPercent}%`,
                        ...(womanPercent > 0 && {
                          borderTopLeftRadius: "4px",
                          borderBottomLeftRadius: "4px",
                        }),
                      }}
                    />
                    <div
                      className="bar man"
                      style={{
                        width: `${manPercent}%`,
                        ...(manPercent > 0 && {
                          borderTopRightRadius: "4px",
                          borderBottomRightRadius: "4px",
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="age-chart__percent">{item.total}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeChart;
