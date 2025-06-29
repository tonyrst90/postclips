import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { InlineInputTypesTitle } from '@/Constant'
import { inlineInputTypesSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import InlineCheckboxRadio from './InlineCheckboxRadio'
import InlineSwitches from './InlineSwitches'

const InlineInputTypes = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={InlineInputTypesTitle} span={inlineInputTypesSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <InlineCheckboxRadio />
                        <InlineSwitches />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default InlineInputTypes