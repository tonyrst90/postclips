import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginSweetAlertContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <LoginForm password logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSweetAlertContainer;