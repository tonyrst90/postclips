import { Card, CardBody, Col } from "reactstrap";
import AppIdeasTimeline from "./AppIdeasTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TimelineTitle } from "@/Constant";
import { timeLineData } from "@/Data/BonusUi/Timeline";

const Timelines = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CommonCardHeader title={TimelineTitle} span={timeLineData} />
        <CardBody>
          <section className="cd-container" id="cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;