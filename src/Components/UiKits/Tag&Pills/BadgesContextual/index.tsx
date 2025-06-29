import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BadgesContextualTitle } from '@/Constant';
import { badgesContextualSubTitle, badgesData } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const BadgesContextual = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BadgesContextualTitle} span={badgesContextualSubTitle} />
                <CardBody>
                    <div className="badge-spacing">
                        {badgesData && badgesData.map((item) => (
                            <Badge className={`badge-${item.class}`} color='' key={item.id}>{item.text}</Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BadgesContextual;