import React from 'react'
import { Card, Col } from 'reactstrap'
import ProfileDetail from './ProfileDetail'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const UserFirstProfile = () => {
    return (
        <Col sm={12}>
            <Card className='hovercard text-center' >
                <div className="cardheader" />
                <div className="user-image">
                    <div className="avatar">
                        <Image src={`${ImagePath}/user/7.jpg`} width={86} height={86} alt='' />
                    </div>
                    <div className="icon-wrapper">
                        <i className="icofont icofont-pencil-alt-5" />
                    </div>
                </div>
                <ProfileDetail />
            </Card>
        </Col>
    )
}
export default UserFirstProfile