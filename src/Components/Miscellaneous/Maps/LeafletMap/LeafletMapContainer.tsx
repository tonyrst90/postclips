import React from "react";
import { Container, Row } from "reactstrap";
import WorldMap from "./WorldMap";
import USAMap from "./USAMap";
import IndiaMap from "./IndiaMap";
import AustraliaMap from "./AustraliaMap";
import { LeafletMap, Maps } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const LeafletMapContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LeafletMap} parent={Maps} title={LeafletMap} />
      <Container fluid>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </>
  );
};

export default LeafletMapContainer;