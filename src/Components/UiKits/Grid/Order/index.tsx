import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { OrderTitle } from '@/Constant';
import { gridOrderBodyData, orderSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import GridCardFooter from '../Common/GridCardFooter';

const Order = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={OrderTitle} span={orderSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className="g-2">
                        {gridOrderBodyData && gridOrderBodyData.map((item, index) => (
                            <Col xs={item.xs} sm={item.sm} className={`order-${item.order}`} key={index}>
                                <span>{item.text}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <GridCardFooter code={'.order-*'} value={'first / 2 / 3 / 4 / 5 / last'} />
            </Card>
        </Col>
    )
}
export default Order;