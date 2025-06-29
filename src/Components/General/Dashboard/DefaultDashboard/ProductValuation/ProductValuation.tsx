import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { ProductValuationHeading } from "@/Constant";
import { orderBarChartData, orderOverviewChartData } from "@/Data/General/Dashboard/DefaultDashboard";

const ProductValuation = () => {
  return (
    <Col xl={8} lg={8} md={7}>
      <Card className="transaction-history">
        <DashboardCommonHeader cardClass="pb-0" title={ProductValuationHeading} />
        <CardBody className="pb-0">
          <div className="current-sale-container order-container">
            <div className="overview-wrapper" >
              <ReactApexChart options={orderOverviewChartData} series={orderOverviewChartData.series} height={250} type="line" />
            </div>
            <div className="back-bar-container">
              <ReactApexChart options={orderBarChartData} series={orderBarChartData.series} height={180} type="bar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductValuation;