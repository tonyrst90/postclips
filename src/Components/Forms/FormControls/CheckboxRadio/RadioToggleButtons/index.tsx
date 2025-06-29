import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Checked, Disabled, Radio, RadioToggleButtonsTitle } from '@/Constant'
import { radioToggleButtonsSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'

const RadioToggleButtons = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RadioToggleButtonsTitle} span={radioToggleButtonsSubTitle} />
                <CardBody className="common-flex main-radio-toggle">
                    <Input className="btn-check" id="option1" type="radio" name="options" defaultChecked />
                    <Label className="btn bg-light-success" htmlFor="option1"> {Checked}</Label>
                    <Input className="btn-check" id="option2" type="radio" name="options" />
                    <Label className="btn bg-light-secondary" htmlFor="option2">  {Radio}</Label>
                    <Input className="btn-check" id="option3" type="radio" name="options" disabled />
                    <Label className="btn bg-light-secondary" htmlFor="option3">{Disabled}</Label>
                    <Input className="btn-check" id="option4" type="radio" name="options" />
                    <Label className="btn bg-light-secondary" htmlFor="option4"> {Radio} </Label>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RadioToggleButtons