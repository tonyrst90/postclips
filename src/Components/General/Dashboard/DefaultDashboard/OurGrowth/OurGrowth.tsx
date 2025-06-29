import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { OurGrowthHeading } from "@/Constant";
import { growthChartData } from "@/Data/General/Dashboard/DefaultDashboard";

const OurGrowth = () => {
  return (
    <Col lg={5} xl={5} className="box-col-5">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={OurGrowthHeading} />
        <CardBody>
          <ReactApexChart options={growthChartData} series={growthChartData.series} height={315} type="area" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurGrowth;