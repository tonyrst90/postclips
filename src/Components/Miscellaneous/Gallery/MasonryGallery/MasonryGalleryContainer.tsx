import { Gallery, MasonryGallery, MasonryGalleryCap } from "@/Constant";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryBody } from "./MasonryGalleryBody";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MasonryGalleryContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGallery} parent={Gallery} title={MasonryGallery} />
      <Container fluid>
        <Row>
          <Col sm={12} className="box-col-12">
            <Card className="pb-5">
              <CommonCardHeader title={MasonryGalleryCap} />
              <MasonryGalleryBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGalleryContainer;