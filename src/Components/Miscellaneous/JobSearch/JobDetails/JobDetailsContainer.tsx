"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import MainCard from "./MainCard";
import { JobDetails, JobSearch } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const JobDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={JobDetails} parent={JobSearch} title={JobDetails} />
      <Container fluid>
        <Row>
          <Col xxl={3} xl={4} className="box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xxl={9} xl={8} className="box-col-8">
            <MainCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDetailsContainer;