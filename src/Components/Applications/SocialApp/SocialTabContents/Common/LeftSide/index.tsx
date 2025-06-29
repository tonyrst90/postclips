import React from 'react'
import { Col } from 'reactstrap'
import MyProfileCard from './MyProfileCard'
import MutualFriends from './MutualFriends'
import ActivityFeed from './ActivityFeed'

const LeftSide = () => {
    return (
        <Col xl={3} md={5} className="box-col-4e xl-40">
            <div className="default-according style-1 faq-accordion">
                <MyProfileCard />
                <MutualFriends />
                <ActivityFeed />
            </div>
        </Col>
    )
}
export default LeftSide