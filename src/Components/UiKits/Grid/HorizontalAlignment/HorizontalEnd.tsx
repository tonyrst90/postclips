import React from 'react'
import { Col, Row } from 'reactstrap'

const HorizontalEnd = () => {
    return (
        <Row className="justify-content-end bg-light">
            <Col xs={5}>
                <span className="bg-white text-dark">{'One column'}</span>
            </Col>
            <Col xs={5}>
                <span className="bg-white text-dark">{'Two column'}</span>
            </Col>
        </Row>
    )
}
export default HorizontalEnd;