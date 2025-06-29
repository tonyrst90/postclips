import { brandData, shippingData } from '@/Data/Applications/ECommerce/Product';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BrandShipping = () => {
    return (
        <Col xxl={3} md={6} className="box-col-6">
            <Card>
                <CardBody>
                    <div className="filter-block">
                        <h3>{'Brand'}</h3>
                        <ul>
                            {brandData.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="collection-filter-block">
                        <ul className="pro-services">
                            {shippingData.map((data) => (
                                <li key={data.id}>
                                    <div className="d-flex">
                                        {data.icon}
                                        <div className="flex-grow-1">
                                            <h5>{data.title}</h5>
                                            <p>{data.subTitle}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BrandShipping;