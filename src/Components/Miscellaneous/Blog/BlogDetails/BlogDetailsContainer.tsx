"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import MarkJencoBlog from "./MarkJencoBlog/MarkJencoBlog";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Blog, BlogDetails } from "@/Constant";

const BlogDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogDetails} parent={Blog} title={BlogDetails} />
      <Container className="blog-page" fluid>
        <Row>
          <MarkJencoBlog />
          <BlogWithDetails />
          <BlogWithoutDetails />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetailsContainer;