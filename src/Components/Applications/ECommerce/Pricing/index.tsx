"use client";
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BecomeMember from './BecomeMember'
import SimplePricingCard from './SimplePricingCard'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { ECommerceTitle, PricingTitle } from '@/Constant'

const PricingContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={PricingTitle} parent={ECommerceTitle} title={PricingTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <BecomeMember />
                        <SimplePricingCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default PricingContainer;