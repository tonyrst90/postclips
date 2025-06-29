import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BadgesPartButtons } from '@/Constant';
import { badgeButtonData, badgeButtonSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Button, Card, CardBody, Col } from 'reactstrap'

const BadgeButton = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BadgesPartButtons} span={badgeButtonSubTitle} />
                <CardBody>
                    <div className='badge-spacing flex-column align-items-start'>
                        {badgeButtonData && badgeButtonData.map((item, index) => (
                            <Button color={item.class} className='d-flex align-items-center' key={index}>{item.text}
                                <Badge className={`badge-light rounded-circle btn-p-space text-dark ms-2`} color="">
                                    {item.iconName}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BadgeButton;