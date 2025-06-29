import { TotalExpensesHeading } from "@/Constant";
import { Card, Col } from "reactstrap";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import CommonCardEarning from "../CommonCardEarning/CommonCardEarning";
import { expensesChartData } from "@/Data/General/Dashboard/DefaultDashboard";

const TotalExpenses = () => {
    return (
        <Col xl={2} md={5} sm={6} className="expenses-card">
            <Card className="earning-card">
                <DashboardCommonHeader title={TotalExpensesHeading} />
                <CommonCardEarning chart={expensesChartData} amount={"$ 14,852"} percentage={"+ 60.09%"} icon={"up-arrow"} />
            </Card>
        </Col>
    );
};

export default TotalExpenses;