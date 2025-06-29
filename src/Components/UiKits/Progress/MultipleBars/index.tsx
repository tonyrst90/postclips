import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { MultipleBarsTitle } from '@/Constant';
import { multipleBarData, multipleBarsSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const MultipleBars = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={MultipleBarsTitle} span={multipleBarsSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {multipleBarData && multipleBarData.map((item, index) => (
                                <Progress key={index} multi>
                                    {item.data && item.data.map((item, index) => (
                                        <Progress key={index} value={item.value} color={item.class} bar />
                                    ))}
                                </Progress>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default MultipleBars;