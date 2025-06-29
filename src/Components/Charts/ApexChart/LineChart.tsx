import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartTitle } from "@/Constant";
import { lineWithAnnotationChartData } from "@/Data/Charts/ApexChart";

export const LineChart = () => {
  return (
    <Col sm={12} xl={12} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ColumnChartTitle} />
        <CardBody>
          <div id="annotationchart">
            <ReactApexChart options={lineWithAnnotationChartData} series={lineWithAnnotationChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
