import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomRadiosTitle } from '@/Constant'
import { customRadioBoxSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import BorderedRadio from './BorderedRadio'
import IconsRadio from './IconsRadio'
import FilledRadio from './FilledRadio'

const CustomRadio = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomRadiosTitle} span={customRadioBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <BorderedRadio />
                        <IconsRadio />
                        <FilledRadio />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomRadio