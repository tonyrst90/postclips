"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import JobApply from "./JobApply";
import { Apply, JobSearch } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const JobApplyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Apply} parent={JobSearch} title={Apply} />
      <Container fluid>
        <Row>
          <Col xxl={3} xl={4} className="box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xxl={9} xl={8} className="box-col-8">
            <JobApply />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobApplyContainer;