import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftSide from '../Common/LeftSide'
import RightSide from '../Common/RightSide'
import KnownPeople from './Common/KnownPeople'
import AboutDetails from './AboutDetails'
import ActivityLog from './ActivityLog'
import { PepoleKnownTitle, ViewedProfileTitle } from '@/Constant'

const AboutTab = () => {
    return (
        <Row>
            <LeftSide />
            <Col xl={6} md={7} className="box-col-8 xl-60">
                <Row>
                    <KnownPeople heading={PepoleKnownTitle} />
                    <AboutDetails />
                    <KnownPeople heading={ViewedProfileTitle} />
                    <ActivityLog />
                </Row>
            </Col>
            <RightSide />
        </Row>
    )
}
export default AboutTab