import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomRadiosTitle, DefaultCheckedRadio, DefaultRadioTitle, DisabledCheckedRadio, DisabledRadios, DisabledRadioSmall, RightRadios } from '@/Constant'
import { defaultRadioSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const DefaultRadio = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultRadioTitle} span={defaultRadioSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <Col sm={6} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <h6 className="sub-title">{CustomRadiosTitle}</h6>
                                <FormGroup check>
                                    <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
                                    <Label htmlFor="flexRadioDefault1" check>{DefaultRadioTitle}</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
                                    <Label htmlFor="flexRadioDefault2" check>{DefaultCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col sm={6} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <h6 className="sub-title">{DisabledRadios}</h6>
                                <FormGroup check>
                                    <Input id="flexRadioDisabled" type="radio" name="flexRadioDisabled" disabled />
                                    <Label htmlFor="flexRadioDisabled" check>{DisabledRadioSmall}</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input id="flexRadioCheckedDisabled" type="radio" name="flexRadioDisabled" defaultChecked disabled />
                                    <Label htmlFor="flexRadioCheckedDisabled" check>{DisabledCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col sm={12} xl={4}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <h6 className="sub-title">{RightRadios}</h6>
                                <FormGroup check className="form-check-reverse">
                                    <Input id="flexRadioDefault3" type="radio" name="flexRadioDefault" />
                                    <Label htmlFor="flexRadioDefault3" check>{DefaultRadioTitle}</Label>
                                </FormGroup>
                                <FormGroup check className="form-check-reverse">
                                    <Input id="flexRadioCheckedDisabled1" type="radio" name="flexRadioDisabled" checked disabled />
                                    <Label htmlFor="flexRadioCheckedDisabled1" check>{DisabledCheckedRadio}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DefaultRadio