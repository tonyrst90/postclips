import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarChartTitle } from "@/Constant";
import { radarChartsData } from "@/Data/Charts/ApexChart";

export const RadarChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadarChartTitle} />
        <CardBody>
          <div id="radarchart">
            <ReactApexChart options={radarChartsData} series={radarChartsData.series} type="radar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
