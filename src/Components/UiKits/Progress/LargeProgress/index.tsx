import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { LargeProgressTitle } from '@/Constant';
import { largeProgressData, largeProgressSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const LargeProgress = () => {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={LargeProgressTitle} span={largeProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {largeProgressData && largeProgressData.map((item, index) => (
                                <Progress color={item.class} value={item.value} className="lg-progress-bar" key={index}>
                                    {item.value}{'%'}
                                </Progress>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default LargeProgress;