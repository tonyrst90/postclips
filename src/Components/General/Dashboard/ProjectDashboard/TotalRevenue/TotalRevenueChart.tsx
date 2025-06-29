import { Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { totalRevenueChartData } from "@/Data/General/Dashboard/ProjectDashboard";

const TotalRevenueChart = () => {
  return (
    <Col xl={9} lg={9} md={12} className="col-xl-100">
      <div className="revenue-legend">
        <ul>
          <li className="me-3">
            <div className="circle bg-primary me-1"> </div>
            <span>Earning</span>
          </li>
          <li>
            <div className="circle bg-secondary me-1" />
            <span>Expense </span>
          </li>
        </ul>
      </div>
      <div className="revenue-chart" >
        <ReactApexChart options={totalRevenueChartData} series={totalRevenueChartData.series} height={316} type="bar" />
      </div>
    </Col>
  );
};

export default TotalRevenueChart;