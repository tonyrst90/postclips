import { AudioTesting } from "@/Constant";
import { Badge } from "reactstrap";

const AutoTestingTimeline = () => {
  const AutoText: string = "So, the next time you listen to music, you might or might not consider how it's actively altering your mood.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-info is-hidden">
        <i className="icon-pulse" />
      </div>
      <div className="cd-timeline-content is-hidden">
        <div className="vertical-timeline-element--work text-start">
          <div className="timeline-wrapper">
            <Badge color="primary">{AudioTesting}</Badge>
          </div>
          <h4 className="m-0">Musical trends and predictability</h4>
          <p className="mb-0">{AutoText}</p>
          <audio controls className="mt-3">
            <source src="/assets/audio/horse.ogg" type="audio/ogg" />
          </audio>
        </div>
      </div>
    </div>
  );
};
export default AutoTestingTimeline;
