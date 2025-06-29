'use client'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CartTable from './CartTable'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { CartTitle, ECommerceTitle } from '@/Constant'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const CartContainer = () => {
    return (
        <>
            <Breadcrumbs title={CartTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={CartTitle} headClass='pb-0' />
                            <CardBody>
                                <CartTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CartContainer;