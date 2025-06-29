import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { SalesOverviewsHeading } from "@/Constant";
import RightIconDropdown from "./RightIconDropdown";
import { salesOverview } from "@/Data/General/Widgets/ChartWidgets";

const SalesOverview = () => {
  return (
    <Col xl={6} lg={12} className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <div className="header-top">
            <h3>{SalesOverviewsHeading}</h3>
            <RightIconDropdown />
          </div>
        </CardHeader>
        <CardBody>
          <div className="chart-container progress-chart">
            <ReactApexChart options={salesOverview} series={salesOverview.series} height={320} type="line" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;