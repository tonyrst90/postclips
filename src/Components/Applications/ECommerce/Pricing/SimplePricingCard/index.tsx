import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Dollar, Purchase, SimplePricingTitle } from '@/Constant';
import { simplePricingData } from '@/Data/Applications/ECommerce/Product';
import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const SimplePricingCard = () => {
    return (
        <Card>
            <CommonCardHeader title={SimplePricingTitle} headClass='pb-0' />
            <CardBody className="pricing-content">
                <Row className="g-sm-4 g-3">
                    {simplePricingData.map((data) => (
                        <Col lg={3} sm={6} className="box-col-3" key={data.id}>
                            <Card className="text-center pricing-simple">
                                <CardBody>
                                    <h3>{data.title}</h3>
                                    <h2>{Dollar}{data.amount}</h2>
                                    <h3 className="mb-0">{data.text}</h3>
                                </CardBody>
                                <Button size="lg" color="primary" block>
                                    {Purchase}
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
export default SimplePricingCard;