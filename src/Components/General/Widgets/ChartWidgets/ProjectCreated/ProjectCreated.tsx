import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { ProjectCreatedHeading } from "@/Constant";
import { revenueGrowthChartData } from "@/Data/General/Widgets/ChartWidgets";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const ProjectCreated = () => {
  return (
    <Col xl={6} lg={12} className="box-col-6 xl-50">
      <Card>
        <CommonCardHeader title={ProjectCreatedHeading} />
        <CardBody>
          <div className="chart-container skill-chart">
            <ReactApexChart options={revenueGrowthChartData} series={revenueGrowthChartData.series} height={335} type='area' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCreated;