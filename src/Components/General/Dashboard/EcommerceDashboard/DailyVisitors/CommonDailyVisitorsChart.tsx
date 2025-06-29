import { dailyVisitorsChartData } from "@/Data/General/Dashboard/EcommerceDashboard";
import { CommonDailyVisitorsChartType } from "@/Types/Dashboard.type";
import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";

const CommonDailyVisitorsChart: React.FC<CommonDailyVisitorsChartType> = ({ height }) => {
  return (
    <Col xl={8} md={8} className="xl-12 box-col-12">
      <div className="area-line">
        <ReactApexChart
          options={dailyVisitorsChartData}
          series={dailyVisitorsChartData.series}
          height={height}
          type="area"
        />
      </div>
    </Col>
  );
};

export default CommonDailyVisitorsChart;