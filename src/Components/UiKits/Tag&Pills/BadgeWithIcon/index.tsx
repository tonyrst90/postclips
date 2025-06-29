import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BadgeIcons, Href } from '@/Constant';
import { badgeIconData, badgeWithIconSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const BadgeWithIcon = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BadgeIcons} span={badgeWithIconSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item) => (
                            <Badge className={`badge-${item.color} ${item.id !== 8 ? 'b-ln-height' : ''}`} color='' href={Href} key={item.id}>
                                {item.iconName}
                            </Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BadgeWithIcon;