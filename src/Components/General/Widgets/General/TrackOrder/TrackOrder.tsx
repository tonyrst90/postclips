import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import TrackOrderPlace from "@/Components/General/Dashboard/EcommerceDashboard/TrackOrder/TrackOrderPlace";
import TrackOrderStatus from "@/Components/General/Dashboard/EcommerceDashboard/TrackOrder/TrackOrderStatus";
import { TrackOrderHeading } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";

const TrackOrder = () => {
  return (
    <Col xl='4' lg='6' md='6' className='box-col-6'>
      <Card>
        <DashboardCommonHeader title={TrackOrderHeading} />
        <CardBody>
          <TrackOrderPlace />
          <TrackOrderStatus />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrackOrder;
