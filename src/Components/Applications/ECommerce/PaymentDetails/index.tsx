'use client'
import React from "react";
import { Container, Row } from "reactstrap";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import CodForm from "./CodForm";
import EmiForm from "./EmiForm";
import NetBanking from "./NetBanking";
import { ECommerceTitle, PaymentDetails } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const PaymentDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PaymentDetails} parent={ECommerceTitle} title={PaymentDetails} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <CodForm />
          <EmiForm />
          <NetBanking />
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetailsContainer;