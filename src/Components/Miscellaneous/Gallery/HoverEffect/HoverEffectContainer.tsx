import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { ImageHoverEffectsCardBody } from "./ImageHoverEffectsCardBody";
import { Gallery, ImageHoverEffects } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { hoverData } from "@/Data/Miscellaneous/Gallery/Gallery";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const HoverEffectContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageHoverEffects} parent={Gallery} title={ImageHoverEffects} />
      <Container fluid>
        {hoverData.map((data, index) => (
          <Row key={index}>
            <Col sm={12}>
              <Card>
                <CommonCardHeader title={`Hover Effect ${data}`} headClass="pb-0" />
                <ImageHoverEffectsCardBody data={data} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HoverEffectContainer;