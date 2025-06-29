import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CheckBoxButton } from "./CheckBoxButton";
import { RadioBoxButton } from "./RadioBoxButton";
import { radioCheckboxData } from "@/Data/Buttons/GroupButton";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

export const RadioCheckboxButton = () => {
  return (
    <Col xs={12}>
      {radioCheckboxData.map((item, i) => (
        <Card key={i}>
          <CommonCardHeader title={item.title} headClass="card-no-border pb-0" span={item.span} />
          <CardBody className="btn-group-showcase radio-checkbox">
            <Row>{item.subButton.map((item, i) => (item.checkBox ? <CheckBoxButton item={item} key={i} /> : <RadioBoxButton item={item} key={i} />))}</Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};