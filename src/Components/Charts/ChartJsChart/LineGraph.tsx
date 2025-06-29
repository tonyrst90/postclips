import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LineGraphTitle } from "@/Constant";
import { lineGraphData, lineGraphOptions } from "@/Data/Charts/ChartJsChart";

export const LineGraph = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={LineGraphTitle} />
        <CardBody className="chart-block">
          <Line data={lineGraphData} options={lineGraphOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
