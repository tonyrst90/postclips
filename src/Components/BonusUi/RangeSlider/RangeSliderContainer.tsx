"use client";
import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider/DefaultRangeSlider";
import MinMaxValue from "./MinMaxValue/MinMaxValue";
import NegativeValue from "./NegativeValue/NegativeValue";
import Disabled from "./Disabled/Disabled";
import Prefix from "./Prefix/Prefix";
import FormateLabel from "./FormateLabel/FormateLabel";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, RangeSlider } from "@/Constant";

const RangeSliderContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RangeSlider} parent={BonusUi} title={RangeSlider} />
      <Container fluid>
        <Row>
          <DefaultRangeSlider />
          <MinMaxValue />
          <NegativeValue />
          <Disabled />
          <Prefix />
          <FormateLabel />
        </Row>
      </Container>
    </>

  );
};

export default RangeSliderContainer;
