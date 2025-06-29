import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { VariationOfSwitchesTitle } from '@/Constant';
import { variationOfSwitchSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SkewedFlipSwitch from './SkewedFlipSwitch';
import CheckedFlatSwitch from './CheckedFlatSwitch';

const VariationOfSwitches = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VariationOfSwitchesTitle} span={variationOfSwitchSubTitle} />
                <CardBody className="switch-wrapper">
                    <ul className="tg-list common-flex">
                        <SkewedFlipSwitch />
                        <CheckedFlatSwitch />
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}
export default VariationOfSwitches;