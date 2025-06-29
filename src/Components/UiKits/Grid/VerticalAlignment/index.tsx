import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { VerticalAlignmentTitle } from '@/Constant';
import { verticalAlignSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import VerticalStart from './VerticalStart';
import VerticalCenter from './VerticalCenter';
import VerticalEnd from './VerticalEnd';
import GridCardFooter from '../Common/GridCardFooter';

const VerticalAlignment = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={VerticalAlignmentTitle} span={verticalAlignSubTitle} />
                <CardBody className='grid-showcase mb-0'>
                    <Row>
                        <VerticalStart />
                        <VerticalCenter />
                        <VerticalEnd />
                    </Row>
                </CardBody>
                <GridCardFooter code={'.align-items-*'} value={'start / center / end / baseline / stretch'} />
            </Card>
        </Col>
    )
}
export default VerticalAlignment;