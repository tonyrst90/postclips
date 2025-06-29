import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ComboChartTitle } from "@/Constant";
import { comboChartData, comboChartOption } from "@/Data/Charts/GoogleChart";

export const ComboChart = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ComboChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="column-chart1">
            <Chart width={"100%"} height={500} chartType={"ComboChart"} loader={<div>{"Loading Chart"}</div>} data={comboChartData} options={comboChartOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
