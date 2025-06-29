import { newUsersSocialData } from '@/Data/Applications/SocialApp'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import NewUsersHeader from './NewUsersHeader'
import Image from 'next/image'
import { Href, ImagePath } from '@/Constant'
import LikeContent from './LikeContent'
import CommentBox from './CommentBox'

const NewUsersSocial = () => {
    return (
        <Row>
            {newUsersSocialData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardBody>
                            <NewUsersHeader />
                            <Image className="img-fluid" alt="" width={737} height={463} src={`${ImagePath}/social-app/timeline-${data.image}`} />
                            <div className="timeline-content">
                                <p>{data.paragraph}</p>
                                <LikeContent />
                                <div className="social-chat">
                                    {data.child.map((item) => (
                                        <div className={item.divClass} key={item.id}>
                                            <div className="d-flex">
                                                <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" width={50} height={50} src={`${ImagePath}/user/${item.src}`} />
                                                <div className="flex-grow-1">
                                                    <span>{item.name} <span>{item.time} <i className="fa fa-reply font-primary" /></span></span>
                                                    <p>{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center"><a href={Href}>{'More Commnets'}</a></div>
                                </div>
                                <CommentBox />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default NewUsersSocial