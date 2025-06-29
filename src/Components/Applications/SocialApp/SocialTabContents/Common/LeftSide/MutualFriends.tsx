import React from 'react'
import { CardBody } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ImagePath, MutualFriendsTitle } from '@/Constant'
import { mutualFriendsData } from '@/Data/Applications/SocialApp'
import Image from 'next/image'

const MutualFriends = () => {
    return (
        <CommonCard title={MutualFriendsTitle}>
            <CardBody className="social-status filter-cards-view">
                {mutualFriendsData.map((data) => (
                    <div className="d-flex" key={data.id}>
                        <Image className="img-50 rounded-circle m-r-15" width={50} height={50} src={`${ImagePath}/user/${data.image}`} alt="" />
                        <div className={`social-status social-${data.status}`}></div>
                        <div className="flex-grow-1">
                            <span className="d-block">{data.name}</span>
                            <span className="d-block">{data.email}</span>
                        </div>
                    </div>
                ))}
            </CardBody>
        </CommonCard>
    )
}
export default MutualFriends