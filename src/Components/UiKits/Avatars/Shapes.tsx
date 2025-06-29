import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, ShapesTitle } from '@/Constant';
import { avatarShapeData, shapesSubTitle } from '@/Data/UiKits/Avatars';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const Shapes = () => {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ShapesTitle} span={shapesSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className='avatars'>
                        {avatarShapeData && avatarShapeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <img className={`img-${item.class}`} src={`${ImagePath}/avtar/${item.image}`} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Shapes;