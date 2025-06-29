import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BackgroundColorsTitle } from '@/Constant';
import { backgroundColorSubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DarkBackground from './DarkBackground';
import LightBackground from './LightBackground';
import ExtendedBackground from './ExtendedBackground';

const BackgroundColors = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BackgroundColorsTitle} span={backgroundColorSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <DarkBackground />
                        <LightBackground />
                        <ExtendedBackground />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BackgroundColors;