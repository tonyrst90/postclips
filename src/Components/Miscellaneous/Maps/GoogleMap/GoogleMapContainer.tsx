"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicMap from "./BasicMap";
import MarkerMapComp from "./MarkerMapComp";
import PolygonsComp from "./PolygonsComp";
import PolylineMapComp from "./PolylineMapComp";
import { GoogleMap, Maps } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const GoogleMapContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleMap} parent={Maps} title={GoogleMap} />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylineMapComp />
        </Row>
      </Container>
    </>
  );
};

export default GoogleMapContainer;