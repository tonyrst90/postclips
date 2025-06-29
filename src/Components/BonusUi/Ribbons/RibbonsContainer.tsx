"use client";
import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons/LeftRibbons";
import RightRibbons from "./RightRibbon/RightRibbons";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, Ribbons } from "@/Constant";

const RibbonsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ribbons} parent={BonusUi} title={Ribbons} />
      <Container fluid>
        <LeftRibbons />
        <RightRibbons />
      </Container>
    </>
  );
};

export default RibbonsContainer;