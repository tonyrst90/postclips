import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CandlestickChartTitle } from "@/Constant";
import { candleStickChartData } from "@/Data/Charts/ApexChart";

export const CandlestickChart = () => {
  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={CandlestickChartTitle} />
        <CardBody>
          <div id="candlestick">
            <ReactApexChart options={candleStickChartData} series={candleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
