import { Card, CardBody, Col } from "reactstrap";
import TrackOrderPlace from "./TrackOrderPlace";
import TrackOrderStatus from "./TrackOrderStatus";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TrackOrderHeading } from "@/Constant";

const TrackOrder = () => {
  return (
    <Col xl={4} lg={4} md={6} className="box-col-4">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={TrackOrderHeading} />
        <CardBody>
          <TrackOrderPlace />
          <TrackOrderStatus />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrackOrder;