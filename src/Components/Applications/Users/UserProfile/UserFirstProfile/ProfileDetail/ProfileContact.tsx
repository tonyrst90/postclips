import React from 'react'
import { Col, Row } from 'reactstrap'

const ProfileContact = () => {
    return (
        <Col sm={6} lg={4} className="order-sm-2 order-xl-2">
            <Row>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <h5>
                            <i className="fa fa-phone" /> {'Contact Us'}
                        </h5>
                        <span>{'India +91 123-456-7890'}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <h5 className="tour-mb-space">
                            <i className="fa fa-location-arrow" /> {'Location'}
                        </h5>
                        <span>{'B69 Near Schoool Demo Home'}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
export default ProfileContact;