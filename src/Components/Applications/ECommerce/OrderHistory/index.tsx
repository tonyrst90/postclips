"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import NewOrders from "./OrderHistoryData/NewOrders";
import ShippedOrders from "./OrderHistoryData/ShippedOrders";
import CancelledOrders from "./OrderHistoryData/CancelledOrders";
import DataTableOrderHistory from "./OrderHistoryData/DataTableOrderHistory";
import { ECommerceTitle, RecentOrders } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const OrderHistoryContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RecentOrders} parent={ECommerceTitle} title={RecentOrders} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <NewOrders />
            <ShippedOrders />
            <CancelledOrders />
            <DataTableOrderHistory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderHistoryContainer;