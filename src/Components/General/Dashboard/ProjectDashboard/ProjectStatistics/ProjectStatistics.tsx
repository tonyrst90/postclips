import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { ProjectStatisticsHeading } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import { statisticsChartData } from "@/Data/General/Dashboard/ProjectDashboard";

const ProjectStatistics = () => {
  return (
    <>
      <Col xl={6}>
        <Card>
          <DashboardCommonHeader cardClass="pb-0" title={ProjectStatisticsHeading} />
          <CardBody className="p-0">
            <ReactApexChart options={statisticsChartData} series={statisticsChartData.series} height={252} type="bubble" id="Statistics" />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProjectStatistics;