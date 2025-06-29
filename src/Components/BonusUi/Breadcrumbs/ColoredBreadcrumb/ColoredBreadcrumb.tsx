import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { StaticColoredBreadcrumb } from "./StaticColoredBreadcrumb";
import { DynamicColoredBreadcrumb } from "./DynamicColoredBreadcrumb";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColoredBreadcrumbs } from "@/Constant";
import { coloredBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";

const ColoredBreadcrumb = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={ColoredBreadcrumbs} span={coloredBreadcrumbData} />
        <CardBody>
          <StaticColoredBreadcrumb />
          <DynamicColoredBreadcrumb />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBreadcrumb;
