import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AreaSpalineChartTitle } from "@/Constant";
import { areaSpalineCharts } from "@/Data/Charts/ApexChart";

export const AreaSpalineChart = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={AreaSpalineChartTitle} />
        <CardBody>
          <div id="area-spaline">
            <ReactApexChart options={areaSpalineCharts} series={areaSpalineCharts.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
