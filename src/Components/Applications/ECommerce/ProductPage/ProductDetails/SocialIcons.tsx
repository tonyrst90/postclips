import { productIconList } from '@/Data/Applications/ECommerce/Product';
import React from 'react'
import { Col, Form, Row } from 'reactstrap'

const SocialIcons = () => {
    return (
        <Row>
            <Col md={4}>
                <h4 className="product-title mb-2">{'Share it'}</h4>
            </Col>
            <Col md={8}>
                <div className="product-icon">
                    <ul className="product-social">
                        {productIconList.map((item) => (
                            <li className="d-inline-block" key={item.id}>
                                <a href={item.link} target='_blank'><i className={`fa fa-${item.icon}`} /></a>
                            </li>
                        ))}
                    </ul>
                    <Form className="d-inline-block f-right" />
                </div>
            </Col>
        </Row>
    )
}
export default SocialIcons;