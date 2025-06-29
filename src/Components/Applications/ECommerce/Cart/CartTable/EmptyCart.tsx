import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const EmptyCart = () => {
    return (
        <section className="cart-section section-b-space">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <div>
                            <Col sm={12} className="empty-cart-cls text-center">
                                <h3>
                                    <strong>{'Your Cart is Empty'}</strong>
                                </h3>
                                <h4>{'Explore more and shortlist some items.'}</h4>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default EmptyCart;