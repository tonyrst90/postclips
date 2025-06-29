"use client";
import { ECommerceTitle, ProductListTitle } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CampaignHeader from "./CampaignHeader";
import CampaignTable from "./CampaignTable";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const CampaignContainer = () => {
  return (
    <>
      <Breadcrumbs
        title={"Campaigns"}
      />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <CampaignHeader linkTitle="Add Product" />
                <CampaignTable campaigns={[]} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CampaignContainer;
