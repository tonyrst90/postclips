'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainLearningCards from "./MainLearningCards";
import SmallLearningCards from "./SmallLearningCards/SmallLearningCards";
import CourseFilter from "./CourseFilter/CourseFilter";
import { Learning, LearningList } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const LearningListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LearningList} parent={Learning} title={LearningList} />
      <Container fluid>
        <Row className="learning-block">
          <Col xxl={9} xl={8} className="box-col-8">
            <Row>
              <MainLearningCards />
              <SmallLearningCards />
            </Row>
          </Col>
          <Col xxl={3} xl={4} className="box-col-4e">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default LearningListContainer;