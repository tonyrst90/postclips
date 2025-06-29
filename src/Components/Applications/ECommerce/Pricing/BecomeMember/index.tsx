import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BecomeMemberTitle, Dollar, Href } from '@/Constant';
import { becomeMemberData, pricingContentList } from '@/Data/Applications/ECommerce/Product';
import Link from 'next/link';
import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const BecomeMember = () => {
    return (
        <Card>
            <CommonCardHeader title={BecomeMemberTitle} headClass='pb-0' />
            <CardBody className="pricing-content">
                <Row className='pricing-col g-3'>
                    {becomeMemberData.map((data) => (
                        <Col lg={3} sm={6} className='box-col-3' key={data.id}>
                            <div className="pricingtable">
                                <div className="pricingtable-header">
                                    <h3 className="title">{data.title}</h3>
                                </div>
                                <div className="price-value">
                                    <span className="currency">{Dollar}</span>
                                    <span className="amount">{data.amount}</span>
                                    <span className="duration">{"/mo"}</span>
                                </div>
                                <ul className="pricing-content">
                                    <li>{data.content}</li>
                                    {pricingContentList.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="pricingtable-signup">
                                    <Link href={Href}>
                                        <Button color="primary" size="lg">
                                            {'Sign Up'}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
export default BecomeMember;