import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ImagePath, LatestPhotosTitle } from '@/Constant'
import Image from 'next/image'
import { latestPhotosData } from '@/Data/Applications/SocialApp'

const LatestPhotos = () => {
    return (
        <Col xl={12} md={6} sm={12} className='xl-50 box-col-6'>
            <CommonCard title={LatestPhotosTitle}>
                <CardBody className="photos filter-cards-view px-0">
                    <ul className="text-center">
                        {latestPhotosData.map((list, i) => (
                            <li key={i}>
                                <Image className="img-fluid" alt="" width={70} height={70} src={`${ImagePath}/social-app/post-${list}`} />
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </CommonCard>
        </Col>
    )
}
export default LatestPhotos