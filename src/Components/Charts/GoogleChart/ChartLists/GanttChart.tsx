import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-google-charts";
import { GanttChartTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ganttChartData, ganttChartOptions } from "@/Data/Charts/GoogleChart";

export const GanttChart = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={GanttChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="column-chart1">
            <Chart chartType="Gantt" width="100%" height={300} loader={<div>{"Loading Chart"}</div>} data={ganttChartData} options={ganttChartOptions} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
