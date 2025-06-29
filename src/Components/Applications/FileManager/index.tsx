"use client"
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FileSideBar from "./FileSideBar";
import FileContent from "./FileContent";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ApplicationsTitle, FileManagerTitle } from "@/Constant";

const FileManagerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FileManagerTitle} parent={ApplicationsTitle} title={FileManagerTitle} />
      <Container fluid>
        <Row>
          <FileSideBar />
          <Col xl={9} md={12} className="box-col-70">
            <div className="file-content">
              <FileContent />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FileManagerContainer;