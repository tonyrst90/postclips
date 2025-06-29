import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { Schedules } from "@/Constant";
import { onlineTimelineGroup, onlineTimelineItems } from "@/Data/General/Dashboard/DefaultDashboard";
import Timeline from "react-calendar-timeline";

const Schedule = () => {
  return (
    <Col xl={4}>
      <Card className="schedule">
        <DashboardCommonHeader cardClass="pb-0" title={Schedules} />
        <CardBody>
          <div className="timeline-calendar custom-scrollbar">
            <div className="custom-calendar" id="calendar-container">
              <div className="time-line custom-scrollbar" id="calendar">
                <Timeline groups={onlineTimelineGroup} items={onlineTimelineItems} defaultTimeStart={new Date().getTime()} defaultTimeEnd={new Date().setHours(new Date().getHours() + 4)} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Schedule;
