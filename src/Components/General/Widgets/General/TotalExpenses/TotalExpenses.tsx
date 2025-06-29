import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import CommonCardEarning from "@/Components/General/Dashboard/DefaultDashboard/CommonCardEarning/CommonCardEarning";
import { TotalExpensesHeading } from "@/Constant";
import { expensesChartData } from "@/Data/General/Dashboard/DefaultDashboard";
import { Card, Col } from "reactstrap";

const TotalExpenses = () => {
  return (
    <Col xl='2' lg='4' sm='6' className='expenses-card'>
      <Card className='earning-card'>
        <DashboardCommonHeader title={TotalExpensesHeading} />
        <CommonCardEarning chart={expensesChartData} amount={"$ 14,852"} percentage={"+ 60.09%"} icon={"up-arrow"} />
      </Card>
    </Col>
  );
};

export default TotalExpenses;
