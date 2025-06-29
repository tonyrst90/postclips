"use client";
import React from "react";
import { Breadcrumb, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import {
  DashboardTitle,
  ECommerceTitle,
  EcommerceDashboardTitle,
} from "@/Constant";
import TotalRevenue from "@/Components/General/Dashboard/EcommerceDashboard/TotalRevenue/TotalRevenue";
import TopProduct from "@/Components/General/Dashboard/EcommerceDashboard/TopProduct/TopProduct";
import TopCategories from "@/Components/General/Dashboard/EcommerceDashboard/TopCategories/TopCategories";
import DailyVisitors from "@/Components/General/Dashboard/EcommerceDashboard/DailyVisitors/DailyVisitors";
import OpenInvoices from "@/Components/General/Dashboard/EcommerceDashboard/OpenInvoices/OpenInvoices";
import StockReport from "@/Components/General/Dashboard/EcommerceDashboard/StockReport/StockReport";
import ProductSales from "@/Components/General/Dashboard/EcommerceDashboard/ProductSales/ProductSales";
import TrackOrder from "@/Components/General/Dashboard/EcommerceDashboard/TrackOrder/TrackOrder";
import ManageOrder from "@/Components/General/Dashboard/EcommerceDashboard/ManageOrder/ManageOrder";

const HomeDashboard = () => {
  return (
    <>
      <Container fluid>
        <div className="page-title">
          <Row>
            <Col sm={12} className="p-0">
              <h3>Dashboard</h3>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <TotalRevenue />
          <DailyVisitors />
          <TopProduct />
          <OpenInvoices />
          <TopCategories />
          <TrackOrder />
          <ProductSales />
          <ManageOrder />
          <StockReport />
        </Row>
      </Container>
    </>
  );
};
export default HomeDashboard;
