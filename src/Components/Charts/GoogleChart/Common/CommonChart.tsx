import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonChartProps } from "@/Types/Buttons.type";

export const CommonChart: React.FC<CommonChartProps> = ({ title, bodyClass, colClass, data, divClass }) => {
  return (
    <Col className={colClass ? colClass : "col-sm-12 col-xl-6 box-col-6 col-12"}>
      <Card>
        <CommonCardHeader headClass="pb-0" title={title} />
        <CardBody className={`chart-block ${bodyClass ? bodyClass : ""}`}>
          <div className={divClass ? divClass : "chart-overflow"} id="column-chart1">
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{"Loading Chart"}</div>} data={data?.data} options={data?.option} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
