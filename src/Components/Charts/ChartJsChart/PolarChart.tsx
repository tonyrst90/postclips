import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { PolarArea } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PolarChartTitle } from "@/Constant";
import { polarData, polarOption } from "@/Data/Charts/ChartJsChart";

export const PolarChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={PolarChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <PolarArea data={polarData} options={polarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
