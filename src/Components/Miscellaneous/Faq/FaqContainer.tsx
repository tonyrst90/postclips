"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Articles from "./Articles";
import Questions from "./Questions/Questions";
import FAQFeaturesTutorial from "./FAQFeaturesTutorial/FAQFeaturesTutorial";
import ArticleVideo from "./ArticleVideo/ArticleVideo";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { FAQ } from "@/Constant";

const FaqContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FAQ} parent={FAQ} title={FAQ} />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Articles />
            <Questions />
            <FAQFeaturesTutorial />
            <ArticleVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FaqContainer;