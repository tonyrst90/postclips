import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BarChartTitle } from "@/Constant";
import { barChartData, barChartOptions } from "@/Data/Charts/ChartJsChart";

export const BarChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BarChartTitle} />
        <CardBody className="chart-block">
          <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
