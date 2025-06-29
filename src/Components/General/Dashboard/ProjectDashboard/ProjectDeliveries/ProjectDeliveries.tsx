import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { ProjectDeliveriesHeading } from "@/Constant";
import { companyViewChartData } from "@/Data/General/Dashboard/ProjectDashboard";

const ProjectDeliveries = () => {
  return (
    <Col xl={4}>
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={ProjectDeliveriesHeading} />
        <CardBody className="p-0">
          <ReactApexChart options={companyViewChartData} series={companyViewChartData.series} height={330} type="area" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectDeliveries;