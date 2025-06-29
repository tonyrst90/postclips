import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadialBarChartTitle } from "@/Constant";
import { radialBarChartData } from "@/Data/Charts/ApexChart";

export const RadialBarChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadialBarChartTitle} />
        <CardBody>
          <div id="circlechart">
            <ReactApexChart options={radialBarChartData} series={radialBarChartData.series} type="radialBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
