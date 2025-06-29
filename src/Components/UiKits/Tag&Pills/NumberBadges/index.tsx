import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, NumberOfBadge } from '@/Constant';
import { badgesData, numberBadgeSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const NumberBadges = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={NumberOfBadge} span={numberBadgeSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badge href={Href} className={`badge-${item.class}`} color='' key={item.id}>{item.id}</Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default NumberBadges;