import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import UserFooter from '../Common/UserFooter'
import ProfileHead from '../Common/ProfileHead'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'

const UserProfile5Style = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead />
                    <hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className="my-gallery" id="aniimated-thumbnials-3">
                                <Gallery>
                                    <figure>
                                        <Item original={`${ImagePath}/blog/img.png`}>
                                            {({ ref, open }) => (
                                                <Link href={Href} onClick={open}>
                                                    <img ref={ref} className='img-fluid rounded' src={`${ImagePath}/blog/img.png`} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Gallery>
                            </div>
                            <UserFooter divClass='mt-4 like-comment-sm-mb' />
                        </Col>
                        <Col xl={6}>
                            <p>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"}</p>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}
export default UserProfile5Style;