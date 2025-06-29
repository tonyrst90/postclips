import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CenteredModalTitle, VerticallyCentered } from '@/Constant';
import { centeredModalSubTitle } from '@/Data/UiKits/Modal';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import CenterdModalBody from './CenterdModalBody';

const CenteredModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader title={CenteredModalTitle} span={centeredModalSubTitle} />
                <CardBody>
                    <Button color='success' onClick={toggle}>{VerticallyCentered}</Button>
                    <CenterdModalBody modal={modal} toggle={toggle} />
                </CardBody>
            </Card>
        </Col>
    )
}
export default CenteredModal;