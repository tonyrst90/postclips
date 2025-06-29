import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, RatioTitle } from '@/Constant';
import { avatarRatioData, ratioSubTitle } from '@/Data/UiKits/Avatars';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const Ratio = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RatioTitle} span={ratioSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarRatioData && avatarRatioData.map((item, index) => (
                            <div className="avatar ratio" key={index}>
                                <img className={`b-r-8 img-${item.class}`} src={`${ImagePath}/${item.image}`} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Ratio;