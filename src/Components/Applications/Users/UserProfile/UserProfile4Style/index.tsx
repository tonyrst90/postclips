import React from 'react'
import { Card, Col } from 'reactstrap'
import UserFooter from '../Common/UserFooter'
import ProfileHead from '../Common/ProfileHead'

const UserProfile4Style = () => {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead />
                    <hr />
                    <p>{"Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes."}</p>
                    <UserFooter divClass='mt-4' />
                </div>
            </Card>
        </Col>
    )
}
export default UserProfile4Style;