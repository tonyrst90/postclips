import React from 'react'
import { Col, Row } from 'reactstrap'
import ProfileMail from './ProfileMail'
import ProfileContact from './ProfileContact'
import ProfileFollower from './ProfileFollower'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

const ProfileDetail = () => {
    return (
        <div className="info">
            <Row>
                <ProfileMail />
                <Col sm={12} lg={4} className="order-sm-0 order-xl-1">
                    <div className="user-designation">
                        <div className="title">
                            <Link href={'"/users/user_profile'}> {'Mark jecno'} </Link>
                        </div>
                        <div className="desc"> {'designer'}</div>
                    </div>
                </Col>
                <ProfileContact />
            </Row>
            <hr />
            <SocialMedia />
            <ProfileFollower />
        </div>
    )
}
export default ProfileDetail;