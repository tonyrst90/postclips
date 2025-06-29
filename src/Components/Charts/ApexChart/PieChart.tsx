import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PieChartTitle } from "@/Constant";
import { pieChartData } from "@/Data/Charts/ApexChart";

export const PieChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={PieChartTitle} />
        <CardBody className="apex-chart">
          <div id="piechart">
            <ReactApexChart options={pieChartData} series={pieChartData.series} type="pie" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
