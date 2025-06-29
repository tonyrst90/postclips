import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import TopCategoriesDetails from "./TopCategoriesDetails";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TopCategoriesHeading } from "@/Constant";
import { topCategoriesChartData } from "@/Data/General/Dashboard/EcommerceDashboard";

const TopCategories = () => {
  return (
    <Col xl={4} lg={4} md={6} className="box-col-4">
      <Card className="categories-card">
        <DashboardCommonHeader cardClass="pb-0" title={TopCategoriesHeading} />
        <CardBody>
          <div className="categories-chart">
            <ReactApexChart options={topCategoriesChartData} series={topCategoriesChartData.series} height={350} type="donut" id="categories" />
            <TopCategoriesDetails />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopCategories;