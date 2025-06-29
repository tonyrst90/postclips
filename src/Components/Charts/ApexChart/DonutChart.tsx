import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DonutChartTitle } from "@/Constant";
import { donutChartData } from "@/Data/Charts/ApexChart";

export const DonutChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={DonutChartTitle} />
        <CardBody className="apex-chart">
          <div id="donutchart">
            <ReactApexChart options={donutChartData} series={donutChartData.series} type="donut" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
