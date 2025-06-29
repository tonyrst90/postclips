import React from 'react'
import { Col, Row } from 'reactstrap'

const ProfileMail = () => {
    return (
        <Col sm={6} lg={4} className="order-sm-1 order-xl-0">
            <Row>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <h5>
                            <i className="fa fa-envelope" />  {'Email'}
                        </h5>
                        <span>{'Marekjecno@yahoo.com'}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="ttl-info text-start">
                        <h5>
                            <i className="fa fa-calendar" />  {'BOD'}
                        </h5>
                        <span>{'02 January 1988'}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
export default ProfileMail;