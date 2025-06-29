import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ProgressAnimated } from '@/Constant';
import { animetedProgressSubTitle, stripedProgressData } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const AnimatedProgress = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ProgressAnimated} span={animetedProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <Progress key={index} color={item.class} value={item.value} striped animated />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default AnimatedProgress;