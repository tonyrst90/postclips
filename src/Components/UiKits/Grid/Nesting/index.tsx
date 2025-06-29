import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { NestingTitle } from '@/Constant';
import { nestingSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import NestingLevel1 from './NestingLevel1';
import NestingLevel2 from './NestingLevel2';

const Nesting = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={NestingTitle} span={nestingSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className='g-3'>
                        <Col xs={3}><span>{'Level 1: .col-3'}</span></Col>
                        <NestingLevel1 />
                        <NestingLevel2 />
                        <Col xs={4}><span>{'Level 2: .col-4'}</span></Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Nesting;