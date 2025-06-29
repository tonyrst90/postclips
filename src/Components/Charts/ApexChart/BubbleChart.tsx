import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BubbleChartTitle } from "@/Constant";
import { bubbleChartData } from "@/Data/Charts/ApexChart";

export const BubbleChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BubbleChartTitle} />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={bubbleChartData} series={bubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};