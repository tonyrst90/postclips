import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { PillsContextualTitle } from '@/Constant';
import { badgesData, pillsContextualSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const PillsContextual = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PillsContextualTitle} span={pillsContextualSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badge className={`badge-${item.class}`} color='' key={item.id} pill>{item.text}</Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default PillsContextual;