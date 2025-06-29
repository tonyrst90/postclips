import { Button, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { monthlyChart } from "@/Data/General/Dashboard/ProjectDashboard";

const TotalRevenueIncrease = () => {
  return (
    <Col xl={3} lg={3} className="increase ps-0">
      <div className="d-flex pe-3">
        <span className="me-2">Year:</span>
        <span>
          2024
          <i className="fa fa-caret-down ms-2" />
        </span>
      </div>
      <div className="total-increase">
        <h2>$25,837</h2>
        <span>Total : 23,000</span>
      </div>
      <ReactApexChart options={monthlyChart} series={monthlyChart.series} height={100} type="area" />
      <Button color="primary">{'Increase'}</Button>
    </Col>
  );
};

export default TotalRevenueIncrease;