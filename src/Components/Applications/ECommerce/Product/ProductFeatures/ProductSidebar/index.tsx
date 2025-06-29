import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { toggleSidebar } from '@/Redux/Reducers/ECommerce/FilterReducer';
import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import ProductCategory from './ProductCategory';
import NewProductSlides from './NewProductSlides';
import Image from 'next/image';
import { ImagePath } from '@/Constant';
import ProductSearch from './ProductSearch';

const ProductSidebar = () => {
    const dispatch = useAppDispatch();
    const { sidebarOpen } = useAppSelector((state) => state.filter);

    return (
        <Row>
            <Col sm={3}>
                <div className={`product-sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className="filter-section">
                        <Card>
                            <CardHeader>
                                <h6 className="mb-0">{'Filters'}
                                    <span className="pull-right">
                                        <i className="fa fa-chevron-down toggle-data" onClick={() => { dispatch(toggleSidebar()) }} />
                                    </span>
                                </h6>
                            </CardHeader>
                            <div className="left-filter filter-sidebar custom-scrollbar">
                                <CardBody className="filter-cards-view animate-chk">
                                    <ProductCategory />
                                    <NewProductSlides />
                                    <div className="product-filter text-center">
                                        <Image className='img-fluid banner-product' width={295} height={446} src={`${ImagePath}/ecommerce/banner.jpg`} alt='' />
                                    </div>
                                </CardBody>
                            </div>
                        </Card>
                    </div>
                </div>
            </Col>
            <ProductSearch />
        </Row>
    )
}
export default ProductSidebar