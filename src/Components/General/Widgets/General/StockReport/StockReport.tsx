import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import CommonStockReportChart from "@/Components/General/Dashboard/EcommerceDashboard/StockReport/CommonStockReportChart";
import StockReportDetails from "@/Components/General/Dashboard/EcommerceDashboard/StockReport/StockReportDetails";
import { StockReportHeading } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
 

const StockReport = () => {
  return (
    <Col xl="5" lg="6" className="box-col-6">
      <Card>
        <DashboardCommonHeader title={StockReportHeading} />
        <CardBody className="p-0">
          <StockReportDetails />
          <CommonStockReportChart height={247} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockReport;
