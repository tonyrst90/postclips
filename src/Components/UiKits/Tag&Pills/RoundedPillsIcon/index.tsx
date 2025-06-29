import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, PillsWithIcons } from '@/Constant';
import { badgeIconData, roundedPillSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const RoundedPillsIcon = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PillsWithIcons} span={roundedPillSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item, index) => (
                            <Badge className={`badge-${item.color} rounded-circle p-2`} color='' href={Href} key={index}>
                                {item.iconName}
                            </Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RoundedPillsIcon;