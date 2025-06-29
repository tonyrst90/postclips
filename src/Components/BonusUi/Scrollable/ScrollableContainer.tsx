"use client";
import { Container, Row } from "reactstrap";
import CustomScrollbar from "./CustomScrollbar";
import SmallSizeScrollbar from "./SmallSizeScrollbar";
import BadgesScrollbar from "./BadgesScrollbar";
import ProfileScrollable from "./ProfileScrollable";
import ScrollableContent from "./ScrollableContent/ScrollableContent";
import HorizontalScrollbar from "./HorizontalScrollbar";
import BothSideVisibleScrollbar from "./BothSideVisibleScrollbar";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, Scrollable } from "@/Constant";

const ScrollableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Scrollable} parent={BonusUi} title={Scrollable} />
      <Container fluid>
        <Row>
          <CustomScrollbar />
          <SmallSizeScrollbar />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideVisibleScrollbar />
        </Row>
      </Container>
    </>
  );
};

export default ScrollableContainer;
