"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, ImageCropper } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const ImageCropperContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageCropper} parent={BonusUi} title={ImageCropper} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={ImageCropper} />
              <CardBody>
                <ImageCropperBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ImageCropperContainer;