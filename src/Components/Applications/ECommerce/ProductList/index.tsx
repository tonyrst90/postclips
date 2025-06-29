"use client";
import { ECommerceTitle, ProductListTitle } from '@/Constant';
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ProductListHeader from './ProductListHeader';
import ProductListTable from './ProductListTable';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';

const ProductListContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ProductListTitle} parent={ECommerceTitle} title={ProductListTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <ProductListHeader linkTitle='Add Product' />
                                <ProductListTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductListContainer;