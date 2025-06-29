import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { NumberOfPills } from '@/Constant';
import { badgesData, numberPillsSubTitle } from '@/Data/UiKits/Tag&Pills';
import React from 'react'
import { Badge, Card, CardBody, Col } from 'reactstrap'

const NumberPills = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={NumberOfPills} span={numberPillsSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badge className={`badge-${item.class} rounded-circle badge-p-space`} color='' key={item.id}>{item.id}</Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default NumberPills;