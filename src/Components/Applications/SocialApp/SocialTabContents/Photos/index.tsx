import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { socialPhotosData } from '@/Data/Applications/SocialApp'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'

const Photos = () => {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CardBody className="my-gallery gallery-with-description">
                        <Row>
                            <Gallery withCaption>
                                {socialPhotosData.map((item) => (
                                    <Col xl={3} sm={6} className='box-col-33' key={item.id}>
                                        <figure>
                                            <Item original={`${ImagePath}/big-lightgallry/${item.image}`} width={819} height={486} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Copyright 2024 © PostClips theme by pixelstrap.">
                                                {({ ref, open }) => (
                                                    <Link href={Href} onClick={open}>
                                                        <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/big-lightgallry/${item.image}`} alt="Image description" />
                                                        <div className="caption border-top-0 p-2">
                                                            <h4>{item.title}</h4>
                                                            <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Item>
                                        </figure>
                                    </Col>
                                ))}
                            </Gallery>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
export default Photos