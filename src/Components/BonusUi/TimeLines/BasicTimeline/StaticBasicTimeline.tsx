import { ConferenceWithClient } from "@/Constant";

export const StaticBasicTimeline = () => {
  const StaticTimeLineText: string = "At noon today, there will be a meeting with a UK client.";

  return (
    <li className="d-flex">
      <div className="timeline-dot-primary"></div>
      <div className="w-100 ms-3">
        <p className="d-flex justify-content-between mb-2">
          <span className="date-content light-background txt-dark">2 Feb 2024</span>
          <span>7:00 AM </span>
        </p>
        <h6>{ConferenceWithClient}<span className="dot-notification"></span></h6>
        <p className="f-light">{StaticTimeLineText}</p>
      </div>
    </li>
  );
};