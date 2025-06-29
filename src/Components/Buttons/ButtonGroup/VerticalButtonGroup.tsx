import React from "react";
import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import { CommonDropdown } from "../Common/CommonDropdown";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ButtonHeading, VerticalTitle } from "@/Constant";
import { verticalText } from "@/Data/Buttons/GroupButton";

export const VerticalButtonGroup = () => {
  return (
    <Col lg={6}>
      <Card className="height-equal vertical">
        <CommonCardHeader headClass="card-no-border pb-0" title={VerticalTitle} span={verticalText} />
        <CardBody className="btn-group-wrapper btn-group">
          <ButtonGroup vertical>
            <Button color="primary">{ButtonHeading}</Button>
            <Button color="secondary">{ButtonHeading}</Button>
            <ButtonGroup>
              <CommonDropdown color="success" />
            </ButtonGroup>
            <Button color="info" className="b-r-0">
              {ButtonHeading}
            </Button>
            <Button color="warning" className="b-r-0">
              {ButtonHeading}
            </Button>
            <CommonDropdown color="danger" className="b-r-0" />
            <CommonDropdown color="light" />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};