import React from 'react'
import { Card, Col } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import UserFooter from '../Common/UserFooter'
import ProfileHead from '../Common/ProfileHead'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'

const UserProfile2Style = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead />
                    <hr />
                    <p>{"Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company."}</p>
                    <div className="img-container">
                        <div className="my-gallery" id="aniimated-thumbnials">
                            <Gallery id="aniimated-thumbnials">
                                <figure>
                                    <Item original={`${ImagePath}/other-images/profile-style-img3.png`}>
                                        {({ ref, open }) => (
                                            <Link href={Href} onClick={open}>
                                                <img className='img-fluid rounded' ref={ref} src={`${ImagePath}/other-images/profile-style-img3.png`} alt='gallery' />
                                            </Link>
                                        )}
                                    </Item>
                                </figure>
                            </Gallery>
                        </div>
                    </div>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}
export default UserProfile2Style;