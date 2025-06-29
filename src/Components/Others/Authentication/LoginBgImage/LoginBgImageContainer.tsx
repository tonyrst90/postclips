"use client";
import RatioImage from "@/CommonComponent/RatioImage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";
import { ImagePath } from "@/Constant";

const LoginBgImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={7}>
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/2.jpg`} alt="looginpage" />
        </Col>
        <Col xl={5} className="p-0">
          <div className="login-card login-dark">
            <LoginForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBgImageContainer;