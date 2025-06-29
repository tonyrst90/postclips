import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import CommonDailyVisitorsChart from "@/Components/General/Dashboard/EcommerceDashboard/DailyVisitors/CommonDailyVisitorsChart";
import DailyVisitorsOrderDetails from "@/Components/General/Dashboard/EcommerceDashboard/DailyVisitors/DailyVisitorsOrderDetails";
import { DailyVisitorsHeading } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const DailyVisitors = () => {
  return (
    <Col xl='6' md='8' className='box-col-6'>
      <Card className='visitors'>       
        <DashboardCommonHeader title={DailyVisitorsHeading} tagClass="pb-0"/>
        <CardBody className='pb-0'>
          <Row>
            <CommonDailyVisitorsChart height={255} />
            <DailyVisitorsOrderDetails />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailyVisitors;
