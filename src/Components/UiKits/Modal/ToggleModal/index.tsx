import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ToggleModalTitle } from '@/Constant';
import { toggleModalSubTitle } from '@/Data/UiKits/Modal';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ToggleModalBody from './ToggleModalBody';

const ToggleModal = () => {
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader title={ToggleModalTitle} span={toggleModalSubTitle} />
                <CardBody>
                    <ToggleModalBody />
                </CardBody>
            </Card>
        </Col>
    )
}
export default ToggleModal;