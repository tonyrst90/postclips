import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BlockquotesTitle } from '@/Constant';
import { blockQuotesData, blockQuotesSubTitle } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BlockQuotesCard = () => {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader headClass='pb-0' title={BlockquotesTitle} span={blockQuotesSubTitle} />
                <CardBody>
                    {blockQuotesData && blockQuotesData.map((item, index) => (
                        <div key={index} className={`figure d-block dark-blockquote text-${item.class}`}>
                            <blockquote className={`blockquote light-card mb-2 ${index === 2 ? 'mb-0' : ''}`}>
                                <p className="mb-0 txt-dark">{item.text}</p>
                                <span className="blockquote-footer pt-3">{item.footer}</span>
                            </blockquote>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default BlockQuotesCard;