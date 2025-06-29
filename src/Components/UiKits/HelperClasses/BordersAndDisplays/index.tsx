import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BordersAndDisplaysTitle } from '@/Constant';
import { bordersAndDisplaySubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdditiveBorder from './AdditiveBorder';
import SubtractiveBorder from './SubtractiveBorder';
import AdditiveRadius from './AdditiveRadius';

const BordersAndDisplays = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass=' pb-0' title={BordersAndDisplaysTitle} span={bordersAndDisplaySubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <AdditiveBorder />
                        <SubtractiveBorder />
                        <AdditiveRadius />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BordersAndDisplays;