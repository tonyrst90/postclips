"use client";

import { useAuth } from "@/Providers/SessionProvider";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Analytics = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card className="mt-5">
            <CardBody>
              <h1>Settings</h1>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Analytics;
