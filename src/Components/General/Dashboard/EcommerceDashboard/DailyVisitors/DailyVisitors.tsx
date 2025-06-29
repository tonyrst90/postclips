import { Card, CardBody, Col, Row } from "reactstrap";
import DailyVisitorsOrderDetails from "./DailyVisitorsOrderDetails";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { DailyVisitorsHeading } from "@/Constant";
import CommonDailyVisitorsChart from "./CommonDailyVisitorsChart";

const DailyVisitors = () => {
  return (
    <Col xxl={6} xl={5} lg={5} className="box-col-5">
      <Card className="visitors">
        <DashboardCommonHeader cardClass="pb-0" title={"Income chart"} />
        <CardBody className="pb-0">
          <Row>
            <CommonDailyVisitorsChart height={200} />
            <DailyVisitorsOrderDetails />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailyVisitors;