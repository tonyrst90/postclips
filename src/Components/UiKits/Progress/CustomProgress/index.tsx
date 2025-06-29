import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomProgressTitle } from '@/Constant'
import { customProgressData, customProgressSubTitle } from '@/Data/UiKits/Progress'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const CustomProgress = () => {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' span={customProgressSubTitle} title={CustomProgressTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {customProgressData && customProgressData.map((item, index) => (
                            <Fragment key={index}>
                                <h6 className="mb-2">{item.text}</h6>
                                <Progress className="mb-4" barClassName='text-center' color={item.class} value={item.value} striped animated>
                                    {item.value}{'%'}
                                </Progress>
                            </Fragment>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default CustomProgress;