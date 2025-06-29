import { MyResolutions, MyResolutionsFor2024, Resolutions } from "@/Constant";
import { Badge } from "reactstrap";

const ResolutionTimeline = () => {
  const ResolutionText: string = "I'm determined to streamline, organism, systematism, realign, and embrace life in 2024.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-movie bg-danger is-hidden">
        <i className="icon-agenda" />
      </div>
      <div className="cd-timeline-content is-hidden">
        <div className="vertical-timeline-element--work text-start">
          <div className="timeline-wrapper">
            <Badge color="warning">{Resolutions}</Badge>
          </div>
          <h4 className="m-0 vertical-timeline-element-subtitle">{MyResolutionsFor2024}</h4>
          <p className="mb-0">{ResolutionText}</p>
          <div className="time-content pt-2">
            <i className="icon-write"></i>
            <h5>{MyResolutions}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResolutionTimeline;
