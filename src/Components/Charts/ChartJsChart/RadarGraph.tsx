import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Radar } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarGraphTitle } from "@/Constant";
import { radarGraphData, radarOptions } from "@/Data/Charts/ChartJsChart";

export const RadarGraph = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadarGraphTitle} />
        <CardBody className="chart-block">
          <Radar data={radarGraphData} options={radarOptions} width={724} height={362} />
        </CardBody>
      </Card>
    </Col>
  );
};
