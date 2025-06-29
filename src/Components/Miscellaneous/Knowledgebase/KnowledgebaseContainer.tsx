"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import CategoryData from "./CategoryData/CategoryData";
import FeaturesTutorial from "./FeaturesTutorial/FeaturesTutorial";
import ArticleAndVideo from "./ArticleVideo/ArticleAndVideo";
import { Knowledgebase } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import Articles from "../Faq/Articles";

const KnowledgebaseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Knowledgebase} parent={Knowledgebase} title={Knowledgebase} />
      <Container fluid className="knowledgebase">
        <Row>
          <KnowledgebaseHelp />
          <Articles />
          <CategoryData />
          <FeaturesTutorial />
          <ArticleAndVideo />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgebaseContainer;