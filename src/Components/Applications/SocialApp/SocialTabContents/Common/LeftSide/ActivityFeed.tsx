import React from 'react'
import { CardBody } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ActivityFeedTitle, Href, ImagePath } from '@/Constant'
import { activityFeedData } from '@/Data/Applications/SocialApp'
import Image from 'next/image'

const ActivityFeed = () => {
    return (
        <CommonCard title={ActivityFeedTitle}>
            <CardBody className="social-status filter-cards-view">
                {activityFeedData.map((data) => (
                    <div className="d-flex" key={data.id}>
                        <Image className="img-50 rounded-circle m-r-15"  width={50} height={50} src={`${ImagePath}/user/${data.image}`} alt="" />
                        <div className="flex-grow-1">
                            <span className="d-block">{data.name}</span>
                            <p>{"Commented on Shaun Park's"}<a href={Href}> {'Photo'}</a></p>
                            <span className="light-span">{data.time}</span>
                        </div>
                    </div>
                ))}
            </CardBody>
        </CommonCard>
    )
}
export default ActivityFeed