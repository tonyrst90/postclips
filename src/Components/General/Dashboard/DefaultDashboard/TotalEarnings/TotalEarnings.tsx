import { Card, Col } from "reactstrap";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TotalEarningsHeading } from "@/Constant";
import CommonCardEarning from "../CommonCardEarning/CommonCardEarning";
import { earningsChartData } from "@/Data/General/Dashboard/DefaultDashboard";

const TotalEarnings = () => {
  return (
    <Col xl={2} md={5} sm={6} className="col-xl-25 box-col-3">
      <Card className="earning-card">
        <DashboardCommonHeader title={TotalEarningsHeading} />
        <CommonCardEarning chart={earningsChartData} amount={"$ 12,463"} percentage={"+ 20.08%"} icon={"down-arrow"} />
      </Card>
    </Col>
  );
};

export default TotalEarnings;