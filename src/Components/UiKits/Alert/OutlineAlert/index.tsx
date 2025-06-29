import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import React, { useState } from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap'
import { OutlineAlertTitle } from '@/Constant';
import { outlineAlertSubTitle } from '@/Data/UiKits/Alert';
import { Clock, ThumbsUp } from 'react-feather';
import { AlertType } from '@/Types/UiKits.type';

const OutlineAlert = () => {
    const [active, setActive] = useState({ clock: true, thumbsUp: true });

    const toggleAlert = (alertKey: keyof AlertType) => {
        setActive(prevState => ({
            ...prevState,
            [alertKey]: !prevState[alertKey]
        }));
    };
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={OutlineAlertTitle} span={outlineAlertSubTitle} />
                <CardBody>
                    <Alert color='transparent' isOpen={active.clock} toggle={() => toggleAlert('clock')} className="txt-primary border-primary">
                        <Clock />
                        <p>{'One of '}<strong> {"YouTube's"} </strong>{'most crucial ranking factors is Watch Time.'}</p>
                    </Alert>
                    <Alert color='transparent' isOpen={active.thumbsUp} toggle={() => toggleAlert('thumbsUp')} className="txt-success border-success outline-2x alert-icons">
                        <ThumbsUp />
                        <p><b> {'Well done! '}</b>{'You successfully read this important message.'}</p>
                    </Alert>
                </CardBody>
            </Card>
        </Col>
    )
}
export default OutlineAlert;