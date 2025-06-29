'use client'
import { Container, Row } from "reactstrap";
import BorderLeft from "./BorderLeft";
import BorderRight from "./BorderRight";
import BorderTop from "./BorderTop";
import BorderBottom from "./BorderBottom";
import BorderPrimaryState from "./BorderPrimaryState";
import BorderWarningState from "./BorderWarningState";
import BorderSecondaryState from "./BorderSecondaryState";
import AbsoluteCard from "./AbsoluteCard";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, CreativeCard } from "@/Constant";

const CreativeCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CreativeCard} parent={BonusUi} title={CreativeCard} />
      <Container fluid>
        <Row>
          <BorderLeft />
          <BorderRight />
          <BorderTop />
          <BorderBottom />
          <BorderPrimaryState />
          <BorderWarningState />
          <BorderSecondaryState />
          <AbsoluteCard />
        </Row>
      </Container>
    </>
  );
};

export default CreativeCardContainer;