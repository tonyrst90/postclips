import { aboutDetailsData } from '@/Data/Applications/SocialApp'
import React from 'react'
import { MoreVertical } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

const AboutDetails = () => {
    return (
        <>
            {aboutDetailsData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardHeader className="social-header pb-0">
                            <h3><span>{data.title}</span><span className="pull-right"><MoreVertical /></span></h3>
                        </CardHeader>
                        <CardBody>
                            {data.child.map((item) => (
                                <Row className="details-about" key={item.id}>
                                    {item.details.map((list) => (
                                        <Col sm={6} key={list.id}>
                                            <div className={`your-details ${list.id === 2 ? "your-details-xs" : ""}`}>
                                                <span className='mb-2 d-block'>
                                                    {list.text}:
                                                </span>
                                                {list.year && <p>{list.year}</p>}
                                                <p>{list.paragraph}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default AboutDetails