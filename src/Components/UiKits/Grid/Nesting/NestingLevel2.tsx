import React from 'react'
import { Col, Row } from 'reactstrap'

const NestingLevel2 = () => {
    return (
        <Col xs={8}>
            <div className="grid-wrapper pb-0">
                <Row className="g-2">
                    <Col sm={2} xs={4}>
                        <span className="border border-2">{'Level 1: .col-2'}</span>
                    </Col>
                    <Col sm={10} xs={8}>
                        <span className="border border-2">{'Level 1: .col-10'}</span>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
export default NestingLevel2;