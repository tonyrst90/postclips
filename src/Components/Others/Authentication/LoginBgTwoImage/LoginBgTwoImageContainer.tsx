import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginBgTwoImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={5}>
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/3.jpg`} alt="looginpage" />
        </Col>
        <Col xl={7} className="p-0">
          <div className="login-card login-dark">
            <LoginForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBgTwoImageContainer;