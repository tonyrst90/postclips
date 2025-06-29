"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import ListViewCard from "./ListViewCard";
import CardsPagination from "../Common/CardsPagination";
import Sidebar from "../Common/Sidebar";
import { JobSearch, ListView } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const ListViewContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ListView} parent={JobSearch} title={ListView} />
      <Container fluid>
        <Row>
          <Col xxl={3} xl={4} className="box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xxl={9} xl={8} className="box-col-8">
            <ListViewCard />
            <CardsPagination />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListViewContainer;
