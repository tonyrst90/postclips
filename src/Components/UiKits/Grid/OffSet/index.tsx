import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { OffSetTitle } from '@/Constant';
import { offsetBodyData, offsetSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import GridCardFooter from '../Common/GridCardFooter';

const OffSet = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={OffSetTitle} span={offsetSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {offsetBodyData && offsetBodyData.map((item, index) => (
                            <Col xs={item.xs} sm={item.sm} className={item.class} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridCardFooter code={'.offset-*'} value={'1 / 2 / ... / 11 / 12'} />
            </Card>
        </Col>
    )
}
export default OffSet;