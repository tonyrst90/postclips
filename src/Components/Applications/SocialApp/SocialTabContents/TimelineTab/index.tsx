import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftSide from '../Common/LeftSide'
import RightSide from '../Common/RightSide'
import NewUsersSocial from './NewUsersSocial'

const TimelineTab = () => {
    return (
        <Row>
            <LeftSide />
            <Col xl={6} md={7} className="box-col-8e xl-60">
                <NewUsersSocial />
            </Col>
            <RightSide />
        </Row>
    )
}
export default TimelineTab