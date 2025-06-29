import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicAreaChartTitle } from "@/Constant";
import { basicAreaChartData } from "@/Data/Charts/ApexChart";

export const BasicAreaChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BasicAreaChartTitle} />
        <CardBody>
          <div id="basic-apex">
            <ReactApexChart options={basicAreaChartData} series={basicAreaChartData.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
