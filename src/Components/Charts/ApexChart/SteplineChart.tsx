import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SteplineChartTitle } from "@/Constant";
import { steplineChartData } from "@/Data/Charts/ApexChart";

export const SteplineChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={SteplineChartTitle} />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={steplineChartData} series={steplineChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
