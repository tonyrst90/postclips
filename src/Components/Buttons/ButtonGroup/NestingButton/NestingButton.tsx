import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { NestingButton1 } from "./NestingButton1";
import { NestingButtonIcons } from "./NestingButtonIcons";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NestingTitle } from "@/Constant";
import { nestingButtonSpan } from "@/Data/Buttons/GroupButton";

export const NestingButton = () => {
  return (
    <Col lg={6}>
      <Card className="height-equal">
        <CommonCardHeader headClass="card-no-border pb-0" title={NestingTitle} span={nestingButtonSpan} />
        <CardBody className="btn-group-wrapper">
          <NestingButton1 />
          <NestingButtonIcons />
        </CardBody>
      </Card>
    </Col>
  );
};