import { MasonryGalleryWithDescription, Gallery, MasonryGalleryDescriptionCap } from "@/Constant";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryWithDescriptionCardBody } from "./MasonryGalleryWithDescriptionCardBody";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MasonryImageDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGalleryWithDescription} parent={Gallery} title={MasonryGalleryWithDescription} />
      <Container fluid>
      <Row>
        <Col sm={12} className="box-col-12">
          <Card>
            <CommonCardHeader title={MasonryGalleryDescriptionCap} />
            <MasonryGalleryWithDescriptionCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </> 
  );
};
export default MasonryImageDescContainer;