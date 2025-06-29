import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan'
import { ImagePath } from '@/Constant'
import { knownPeopleData } from '@/Data/Applications/SocialApp'
import { FollowDataType } from '@/Types/SocialApp.type'
import Image from 'next/image'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'

const KnownPeople: React.FC<FollowDataType> =({ heading })=> {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={heading} />
                <CardBody className="avatar-showcase">
                    <div className="pepole-knows">
                        <ul>
                            {knownPeopleData.map((data) => (
                                <li key={data.id}>
                                    <div className="add-friend text-center">
                                        <Image className="img-60 img-fluid rounded-circle" alt="" width={60} height={60} src={`${ImagePath}/user/${data.src}`} />
                                        <span className="d-block">{data.name}</span>
                                        <Button color='primary' size='xs'>{'Add Friend'}</Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default KnownPeople