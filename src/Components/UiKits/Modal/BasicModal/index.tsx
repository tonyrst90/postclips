import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BasicModalTitle } from '@/Constant';
import { basicModalSubTitle } from '@/Data/UiKits/Modal';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SimpleModal from './SimpleModal';
import ScrollingModal from './ScrollingModal';
import TooltipModal from './TooltipModal';
import CrocsModal from './CrocsModal';

const BasicModal = () => {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BasicModalTitle} span={basicModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <SimpleModal />
                    <ScrollingModal />
                    <TooltipModal />
                    <CrocsModal />
                </CardBody>
            </Card>
        </Col>
    )
}
export default BasicModal;