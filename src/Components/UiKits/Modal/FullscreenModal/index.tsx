import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FullscreenModalTitle } from '@/Constant'
import { fullscreenModalSubTitle } from '@/Data/UiKits/Modal'
import FullScreenOutline from './FullScreenOutline'
import FullScreenBelowSm from './FullScreenBelowSm'
import BelowMd from './BelowMd'
import BelowLg from './BelowLg'
import BelowXl from './BelowXl'
import BelowXxl from './BelowXxl'

const FullscreenModal = () => {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader title={FullscreenModalTitle} span={fullscreenModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullScreenOutline />
                    <FullScreenBelowSm />
                    <BelowMd />
                    <BelowLg />
                    <BelowXl />
                    <BelowXxl />
                </CardBody>
            </Card>
        </Col>
    )
}
export default FullscreenModal;