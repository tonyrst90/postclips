import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ProgressStriped } from '@/Constant';
import { stripedProgressData, stripedProgressSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const StripedProgress = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ProgressStriped} span={stripedProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <Progress key={index} color={item.class} value={item.value} striped />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StripedProgress;