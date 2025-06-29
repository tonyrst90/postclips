import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineChartTitle } from "@/Constant";
import { lineChartData, lineChartOption } from "@/Data/Charts/ChartJsChart";

export const LineChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={LineChartTitle} />
        <CardBody className="chart-block">
          <Line data={lineChartData} options={lineChartOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
