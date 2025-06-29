import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MixedChartTitle } from "@/Constant";
import { mixedChartData } from "@/Data/Charts/ApexChart";

export const MixedChart = () => {
  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={MixedChartTitle} />
        <CardBody>
          <div id="mixedchart">
            <ReactApexChart options={mixedChartData} series={mixedChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
