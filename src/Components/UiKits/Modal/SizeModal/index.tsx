import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { SizeModalTitle } from '@/Constant';
import { sizeModalSubTitle } from '@/Data/UiKits/Modal';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import FullScreen from './FullScreen';
import ExtraLarge from './ExtraLarge';
import LargeModal from './LargeModal';
import SmallModal from './SmallModal';

const SizeModal = () => {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SizeModalTitle} span={sizeModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullScreen />
                    <ExtraLarge />
                    <LargeModal />
                    <SmallModal />
                </CardBody>
            </Card>
        </Col>
    )
}
export default SizeModal;