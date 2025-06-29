import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CustomHeightProgressTitle } from '@/Constant';
import { customHeightData, customSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const CustomHeightProgress = () => {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={CustomHeightProgressTitle} span={customSubTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {customHeightData && customHeightData.map((item, index) => (
                            <Progress color={item.class} value={item.value} style={{ height: item.text }} key={index} />
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default CustomHeightProgress;