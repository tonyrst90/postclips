"use client";
import { Gallery, GalleryGridWithDescription, GalleryGridWithDescriptionCap } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { DescriptionMyGallery } from "./DescriptionMyGallery";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const GalleryGridDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GalleryGridWithDescription} parent={Gallery} title={GalleryGridWithDescription} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={GalleryGridWithDescriptionCap} headClass="pb-0" />
              <CardBody className="my-gallery gallery-with-description">
                <Row>
                  <DescriptionMyGallery />
                </Row>  
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGridDescContainer;