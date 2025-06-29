import React from "react";
import { Col, Container, Row } from "reactstrap";
import { RegisterWizardForm } from "./RegisterWizardForm/RegisterWizardForm";

const RegisterWizardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <RegisterWizardForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterWizardContainer;