'use client'
import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { DashboardTitle, DefaultDashboardTitle, DefaultTitle } from '@/Constant';
import TotalExpenses from './TotalExpenses/TotalExpenses';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';
import RecentOrder from './RecentOrder/RecentOrder';
import OurGrowth from './OurGrowth/OurGrowth';
import ProductValuation from './ProductValuation/ProductValuation';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Notifications from './Notifications/Notifications';
import UserByCountry from './UserByCountry/UserByCountry';
import Schedule from './Schedule/Schedule';
import WelcomeCard from './WelcomeCard/WelcomeCard';
import TotalEarnings from './TotalEarnings/TotalEarnings';

const DefaultDashboardContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={DefaultDashboardTitle} parent={DashboardTitle} title={DefaultTitle} />
            <Container fluid className="default-dashboard">
                <Row>
                    <WelcomeCard />
                    <TotalEarnings />
                    <TotalExpenses />
                    <TopSellingProduct />
                    <RecentOrder />
                    <OurGrowth />
                    <ProductValuation />
                    <TransactionHistory />
                    <Notifications />
                    <UserByCountry />
                    <Schedule />
                </Row>
            </Container>
        </>
    )
}
export default DefaultDashboardContainer;