import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import UserFooter from '../Common/UserFooter'
import ProfileHead from '../Common/ProfileHead'
import { userProfile3Style } from '@/Data/Applications/Users'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'

const UserProfile3Style = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead />
                    <hr />
                    <p>{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</p>
                    <Row className="mt-4 pictures my-gallery" id="aniimated-thumbnials-2">
                        {userProfile3Style.map((index) => (
                            <Gallery key={index}>
                                <Col sm={6}>
                                    <figure>
                                        <Item original={`${ImagePath}/other-images/profile-style-img3.png`}>
                                            {({ ref, open }) => (
                                                <Link href={Href} onClick={open}>
                                                    <img className='img-fluid rounded' ref={ref} src={`${ImagePath}/other-images/profile-style-img.png`} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Col>
                            </Gallery>
                        ))}
                    </Row>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}
export default UserProfile3Style;