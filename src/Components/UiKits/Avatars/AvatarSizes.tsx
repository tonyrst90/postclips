import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, Sizes } from '@/Constant';
import { avatarSizeData, sizesSubTitle } from '@/Data/UiKits/Avatars';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const AvatarSizes = () => {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={Sizes} span={sizesSubTitle} />
                <CardBody className="avatar-showcase">
                    <div className="avatars">
                        {avatarSizeData && avatarSizeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <img className={`img-${item.class} rounded-circle`} src={`${ImagePath}/avtar/${item.image}`} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default AvatarSizes;