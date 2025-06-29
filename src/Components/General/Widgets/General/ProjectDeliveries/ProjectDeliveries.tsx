import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import { ProjectDeliveriesHeading } from "@/Constant";
import { companyViewChartData } from "@/Data/General/Dashboard/ProjectDashboard";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
 

const ProjectDeliveries = () => {
  return (
    <Col xl="3" lg="12" md="6" className="box-col-12">
      <Card>
        <DashboardCommonHeader title={ProjectDeliveriesHeading} />
        <CardBody className="p-0">
          <ReactApexChart options={companyViewChartData} series={companyViewChartData.series} height={330} type="area" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectDeliveries;
