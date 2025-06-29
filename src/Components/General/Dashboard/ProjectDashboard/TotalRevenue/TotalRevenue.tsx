import { Card, CardBody, Col, Row } from "reactstrap";
import TotalRevenueChart from "./TotalRevenueChart";
import TotalRevenueIncrease from "./TotalRevenueIncrease";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TotalRevenueHeading } from "@/Constant";

const TotalRevenue = () => {
  return (
    <Col xl={6} lg={9} md={8}>
      <Card className="total-revenue">
        <DashboardCommonHeader cardClass="pb-0" title={TotalRevenueHeading} dropDownFalse />
        <CardBody className="p-0">
          <Row>
            <TotalRevenueChart />
            <TotalRevenueIncrease />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalRevenue;