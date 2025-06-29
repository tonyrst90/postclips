import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DoughnutChartTitle } from "@/Constant";
import { doughnutData, doughnutOption } from "@/Data/Charts/ChartJsChart";

export const DoughnutChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={DoughnutChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
