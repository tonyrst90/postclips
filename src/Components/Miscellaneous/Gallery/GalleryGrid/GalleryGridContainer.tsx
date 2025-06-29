"use client";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { MyGallery } from "./MyGallery";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Gallery, ImageGallery } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const GalleryGridContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Gallery} parent={Gallery} title={Gallery} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={ImageGallery} headClass="pb-0" />
              <CardBody className="gallery my-gallery">
                <Row className="g-3">
                  <MyGallery />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGridContainer;