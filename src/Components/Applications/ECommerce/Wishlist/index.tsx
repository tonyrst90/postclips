"use client"
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ECommerceTitle, WishlistTitle } from '@/Constant';
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import WishlistCards from './WishlistCards';

const WishlistContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={WishlistTitle} parent={ECommerceTitle} title={WishlistTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={WishlistTitle} headClass='pb-0' />
                            <CardBody>
                                <WishlistCards />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WishlistContainer;