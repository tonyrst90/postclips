import React, { useState } from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { Heart } from 'react-feather';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DismissingDarkAlertTitle } from '@/Constant';
import { dismissAlertSubTitle } from '@/Data/UiKits/Alert';

const DismissingDarkAlert = () => {
    const [active, setActive] = useState(true);
    const onDismiss = () => {
        setActive(!active);
    }
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={DismissingDarkAlertTitle} span={dismissAlertSubTitle} />
                <CardBody>
                    <Alert color='secondary' isOpen={active} toggle={onDismiss} className='dark'>
                        <Heart />
                        <p>{"Check your update! You should check in on some of those fields below."}</p>
                    </Alert>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DismissingDarkAlert;