"use client";
import { Container, Row } from "reactstrap";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import DividerBreadcrumb from "./DividerBreadcrumb";
import WithIconsBreadcrumb from "./WithIconsBreadcrumb";
import VariationOfBreadcrumb from "./VariationOfBreadcrumb";
import ColoredBreadcrumb from "./ColoredBreadcrumb/ColoredBreadcrumb";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, Breadcrumb } from "@/Constant";

const BreadcrumbContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Breadcrumb} parent={BonusUi} title={Breadcrumb} />
      <Container fluid>
      <Row>
        <DefaultBreadcrumb />
        <DividerBreadcrumb />
        <WithIconsBreadcrumb />
        <VariationOfBreadcrumb />
        <ColoredBreadcrumb />
      </Row>
    </Container>
    </>
    
  );
};

export default BreadcrumbContainer;