import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { VariationAddonsTitle } from '@/Constant';
import { varationOfAddonsSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import VariationAddonsFormContent from './VariationAddonsFormContent';
import CommonCardFooter from '../../Common/CommonCardFooter';

const VariationAddons = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VariationAddonsTitle} span={varationOfAddonsSubTitle} />
                <CardBody className="card-wrapper input-radius">
                    <Row>
                        <Col>
                            <VariationAddonsFormContent />
                        </Col>
                    </Row>
                </CardBody>
                <CommonCardFooter color1='primary' color2='light' />
            </Card>
        </Col>
    )
}
export default VariationAddons;