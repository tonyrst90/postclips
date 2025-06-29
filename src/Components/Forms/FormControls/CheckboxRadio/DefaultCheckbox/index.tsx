import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultCheckboxTitle, Indeterminate, IndeterminateCheckbox } from '@/Constant'
import { defaultCheckboxData, defaultCheckBoxSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const DefaultCheckbox = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultCheckboxTitle} span={defaultCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {defaultCheckboxData.map((data) => (
                            <Col sm={6} xl={4} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked">
                                    <h6 className="sub-title">{data.title}</h6>
                                    {data.child.map((item) => (
                                        <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ''} check>
                                            <Input id={item.id} type="checkbox" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                                            <Label htmlFor={item.id} check>{item.labelText}</Label>
                                        </FormGroup>
                                    ))}
                                </div>
                            </Col>
                        ))}
                        <Col sm={6} xl={12}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <h6 className="sub-title">{Indeterminate}</h6>
                                <FormGroup check>
                                    <Input id="flexCheckIndeterminate" type="checkbox" value='' />
                                    <Label htmlFor="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DefaultCheckbox