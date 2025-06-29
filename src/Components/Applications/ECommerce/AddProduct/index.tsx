'use client'
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import ProductFormNav from './ProductFormNav';
import ProductTabContents from './ProductTabContents';
import { AddProductTitle, ECommerceTitle, ProductForm } from '@/Constant';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';

const AddProductContainer = () => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <>
            <Breadcrumbs title={AddProductTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CommonCardHeader title={ProductForm} />
                            <CardBody>
                                <Row className="g-xl-5 g-3">
                                    <ProductFormNav steps={steps} setSteps={setSteps} />
                                    <ProductTabContents steps={steps} activeCallBack={activeCallBack} />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddProductContainer;