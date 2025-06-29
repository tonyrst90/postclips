import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BasicProgressBars } from '@/Constant';
import { basicProgressData, basicProgressSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const BasicProgress = () => {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={BasicProgressBars} span={basicProgressSubTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {basicProgressData && basicProgressData.map((item, index) => (
                            <Progress key={index} color={item.class} value={item.value} >{item.value}{'%'}</Progress>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default BasicProgress;