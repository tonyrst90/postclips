'use client'
import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { DashboardTitle, ECommerceTitle, EcommerceDashboardTitle } from '@/Constant';
import TotalRevenue from './TotalRevenue/TotalRevenue';
import DailyVisitors from './DailyVisitors/DailyVisitors';
import TopProduct from './TopProduct/TopProduct';
import OpenInvoices from './OpenInvoices/OpenInvoices';
import TopCategories from './TopCategories/TopCategories';
import TrackOrder from './TrackOrder/TrackOrder';
import ProductSales from './ProductSales/ProductSales';
import ManageOrder from './ManageOrder/ManageOrder';
import StockReport from './StockReport/StockReport';

const EcommerceDashboardContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={EcommerceDashboardTitle} parent={DashboardTitle} title={ECommerceTitle} />
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
    )
}
export default EcommerceDashboardContainer;