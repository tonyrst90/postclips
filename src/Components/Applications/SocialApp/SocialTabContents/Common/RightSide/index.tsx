import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ProfileIntro from './ProfileIntro'
import FollowData from './Common/FollowData'
import LatestPhotos from './LatestPhotos'
import FriendsCard from './FriendsCard'
import { Followers, FollowingsTitle, ImagePath } from '@/Constant'
import Image from 'next/image'

const RightSide = () => {
    return (
        <Col xl={3} className="xl-100 box-col-12">
            <div className="default-according style-1 faq-accordion job-accordion">
                <Row>
                    <ProfileIntro />
                    <FollowData heading={Followers} />
                    <FollowData heading={FollowingsTitle} />
                    <LatestPhotos />
                    <FriendsCard />
                    <Col xl={12} md={6} sm={12} className='xl-50 box-col-6'>
                        <Card>
                            <Image className="img-fluid" width={470} height={250} src={`${ImagePath}/social-app/timeline-4.png`} alt="" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
export default RightSide