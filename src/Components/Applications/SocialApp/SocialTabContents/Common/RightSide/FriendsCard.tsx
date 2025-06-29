import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../CommonCard'
import { FriendsTitle, ImagePath } from '@/Constant'
import { friendsCardList } from '@/Data/Applications/SocialApp'
import Image from 'next/image'

const FriendsCard = () => {
    return (
        <Col xl={12} md={6} sm={12} className='xl-50 box-col-6'>
            <CommonCard title={FriendsTitle}>
                <CardBody className="avatar-showcase filter-cards-view">
                    {friendsCardList.map((list, i) => (
                        <div className="d-inline-block friend-pic" key={i}>
                            <Image className="img-50 rounded-circle" width={50} height={50} src={`${ImagePath}/user/${list}`} alt="#" />
                        </div>
                    ))}
                </CardBody>
            </CommonCard>
        </Col>
    )
}
export default FriendsCard