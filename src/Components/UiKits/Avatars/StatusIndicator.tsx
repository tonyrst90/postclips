import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, StatusIndicatorTitle } from '@/Constant';
import { avatarStatusData, statusSubTitle } from '@/Data/UiKits/Avatars';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const StatusIndicator = () => {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={StatusIndicatorTitle} span={statusSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className='avatars'>
                        {avatarStatusData && avatarStatusData.map((item, index) => (
                            <div className="avatar" key={index}>
                                <img className={`img-${item.class} rounded-circle`} src={`${ImagePath}/${item.image}`} alt="user profile" />
                                <div className={`status status-${item.status}`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StatusIndicator;