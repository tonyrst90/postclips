import React, { useState } from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { HelpCircle } from 'react-feather';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { LeftBorderAlertTitle } from '@/Constant';
import { leftBorderAlertSubTitle } from '@/Data/UiKits/Alert';

const LeftBorderAlert = () => {
    const [active, setActive] = useState(true);

    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={LeftBorderAlertTitle} span={leftBorderAlertSubTitle} />
                <CardBody className='live-dark'>
                    <Alert color='light-dark' isOpen={active} toggle={() => setActive(false)} className='light text-dark border-left-wrapper'>
                        <HelpCircle />
                        <p className="txt-dark">{'You can check in on some of those fields below.'}</p>
                    </Alert>
                </CardBody>
            </Card>
        </Col>
    )
}
export default LeftBorderAlert;