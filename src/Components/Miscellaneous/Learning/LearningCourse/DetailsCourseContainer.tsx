"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlogSingle from "./BlogSingle";
import CourseFilter from "../LearningList/CourseFilter/CourseFilter";
import { DetailedCourse, Learning } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const DetailsCourseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DetailedCourse} parent={Learning} title={DetailedCourse} />
      <Container fluid>
        <Row className="learning-block">
          <Col xxl={9} xl={8} className="box-col-8">
            <BlogSingle />
          </Col>
          <Col xxl={3} xl={4} className="box-col-4e">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailsCourseContainer;