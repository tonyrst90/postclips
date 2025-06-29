import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartTitle } from "@/Constant";
import { columnChartData } from "@/Data/Charts/ApexChart";

export const ColumnChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ColumnChartTitle} />
        <CardBody>
          <div id="column-chart">
            <ReactApexChart options={columnChartData} series={columnChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
