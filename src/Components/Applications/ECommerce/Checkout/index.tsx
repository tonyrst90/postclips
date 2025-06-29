"use client"
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BillingDetails, CheckoutTitle, ECommerceTitle } from '@/Constant'
import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import CheckoutForm from './CheckoutForm'
import CheckoutDetails from './CheckoutDetails'

const CheckoutContainer = () => {
    return (
        <>
            <Breadcrumbs title={CheckoutTitle} />
            <Container fluid>
                <Card>
                    <CommonCardHeader title={BillingDetails} headClass='pb-0' />
                    <CardBody>
                        <Row className='g-3'>
                            <CheckoutForm />
                            <CheckoutDetails />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
export default CheckoutContainer;