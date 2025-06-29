import { FollowDataType } from '@/Types/SocialApp.type'
import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../../CommonCard'
import { followCardData } from '@/Data/Applications/SocialApp'
import Image from 'next/image'
import { Href, ImagePath } from '@/Constant'

const FollowData: React.FC<FollowDataType> = ({ heading }) => {
    return (
        <Col xl={12} md={6} sm={12} className='xl-50 box-col-6'>
            <CommonCard title={heading}>
                <CardBody className="social-list filter-cards-view">
                    {followCardData.map((data) => (
                        <div className="d-flex" key={data.id}>
                            <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" width={50} height={50} src={`${ImagePath}/user/${data.image}`} />
                            <div className="flex-grow-1">
                                <span className="d-block">{data.name}</span>
                                <a href={Href}>{'Add Friend'}</a>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </CommonCard>
        </Col>
    )
}
export default FollowData