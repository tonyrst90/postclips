'use client'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductSlider from './ProductSlider'
import ProductDetails from './ProductDetails'
import BrandShipping from './BrandShipping'
import ProductPageTabs from './ProductPageTabs'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { ECommerceTitle, ProductPageTitle } from '@/Constant'

const ProductPageContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ProductPageTitle} parent={ECommerceTitle} title={ProductPageTitle} />
            <Container fluid>
                <div>
                    <Row className="product-page-main p-0">
                        <Col xxl={4} md={6} className="box-col-12">
                            <Card>
                                <CardBody>
                                    <ProductSlider />
                                </CardBody>
                            </Card>
                        </Col>
                        <ProductDetails />
                        <BrandShipping />
                    </Row>
                </div>
                <ProductPageTabs />
            </Container>
        </>
    )
}
export default ProductPageContainer;