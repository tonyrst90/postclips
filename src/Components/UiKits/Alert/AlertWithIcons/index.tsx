import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { AlertWithIconsTitle } from '@/Constant';
import { alertWithIconSubTitle } from '@/Data/UiKits/Alert';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import HeartAlert from './HeartAlert';
import TimeAlert from './TimeAlert';

const AlertWithIcons = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AlertWithIconsTitle} span={alertWithIconSubTitle} />
                <CardBody className='dark-txt'>
                    <TimeAlert />
                    <HeartAlert />
                </CardBody>
            </Card>
        </Col>
    )
}
export default AlertWithIcons;