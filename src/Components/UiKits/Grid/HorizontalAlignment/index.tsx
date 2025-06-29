import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HorizontalAlignmentTitle } from '@/Constant';
import { horizontalAlignSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import HorizontalStart from './HorizontalStart';
import HorizontalCenter from './HorizontalCenter';
import HorizontalEnd from './HorizontalEnd';
import GridCardFooter from '../Common/GridCardFooter';

const HorizontalAlignment = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={HorizontalAlignmentTitle} span={horizontalAlignSubTitle} />
                <CardBody className='grid-showcase grid-align'>
                    <HorizontalStart />
                    <HorizontalCenter />
                    <HorizontalEnd />
                </CardBody>
                <GridCardFooter code={'.justify-content-*'} value={'start / center / end / around / between'} />
            </Card>
        </Col>
    )
}
export default HorizontalAlignment;