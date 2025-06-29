import { Card, CardBody, Col } from "reactstrap";
import { MeetupHoveringTimeline } from "./MeetupHoveringTimeline";
import { InterviewHoveringTimeline } from "./InterviewHoveringTimeline";
import { AnnualFunctionHoveringTimeline } from "./AnnualFunctionHoveringTimeline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HoveringTimelines } from "@/Constant";
import { hoveringTimeLineData } from "@/Data/BonusUi/Timeline";

const HoveringTimeline = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={HoveringTimelines} span={hoveringTimeLineData} />
        <CardBody className="dark-timeline mb-4">
          <ul className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoveringTimeline;