import React, { useState } from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap';
import { Bell } from 'react-feather';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DismissingLightAlertTitle } from '@/Constant';
import { dismissAlertSubTitle } from '@/Data/UiKits/Alert';

const DismissingLightAlert = () => {
    const [active, setActive] = useState(true);

    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={DismissingLightAlertTitle} span={dismissAlertSubTitle} />
                <CardBody>
                    <Alert color='warning' toggle={() => { setActive(false)}} isOpen={active}>
                        <Bell />
                        <p>{"Hidden content You should check in on some of those fields below."}</p>
                    </Alert>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DismissingLightAlert;