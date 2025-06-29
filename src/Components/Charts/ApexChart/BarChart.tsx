import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BarChartTitle } from "@/Constant";
import { barChartData } from "@/Data/Charts/ApexChart";

export const BarChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BarChartTitle} />
        <CardBody>
          <div id="basic-bar">
            <ReactApexChart options={barChartData} series={barChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
