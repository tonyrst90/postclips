import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'reactstrap'

const ProfileHead = () => {
    return (
        <Row>
            <Col sm={8}>
                <div className="d-flex">
                    <Image className="img-thumbnail rounded-circle me-3" width={40} height={40} src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder image" />
                    <div className="flex-grow-1 align-self-center">
                        <h5 className="mt-0 user-name">{'JOHAN DIO'}</h5>
                    </div>
                </div>
            </Col>
            <Col sm={4} className="align-self-center">
                <div className="float-sm-end">
                    <small>{'10 Hours ago'}</small>
                </div>
            </Col>
        </Row>
    )
}
export default ProfileHead;