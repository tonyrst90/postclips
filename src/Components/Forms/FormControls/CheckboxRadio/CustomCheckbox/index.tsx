import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomCheckboxTitle } from '@/Constant'
import { customCheckBoxSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import BorderedCheckbox from './BorderedCheckbox'
import IconCheckbox from './IconCheckbox'
import FilledCheckbox from './FilledCheckbox'

const CustomCheckbox = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomCheckboxTitle} span={customCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <BorderedCheckbox />
                        <IconCheckbox />
                        <FilledCheckbox />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomCheckbox