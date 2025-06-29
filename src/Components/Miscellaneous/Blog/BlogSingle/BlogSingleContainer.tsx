"use client";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { SingleBlogData } from "./SingleBlogData";
import CommentSection from "./CommentSection";
import { Blog, BlogSingle } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const BlogSingleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogSingle} parent={Blog} title={BlogSingle} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="blog-single">
              <SingleBlogData />
              <CommentSection />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogSingleContainer;