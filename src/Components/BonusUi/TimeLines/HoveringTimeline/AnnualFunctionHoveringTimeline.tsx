import { Location } from "@/Constant";
import { Label } from "reactstrap";

export const AnnualFunctionHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon"></Label>
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">January 2022- Annual Function</p>
        <h5 className="f-w-500">{Location}</h5>
        <span className="text-muted">Largo Febo,10225012-Calvisano BS</span>
        <p className="pt-3 mb-4">{`What a dynamic performance by the eighth-grade students, Let's welcome the ninth-grade kid to the stage`}.</p>
      </div>
    </li>
  );
};