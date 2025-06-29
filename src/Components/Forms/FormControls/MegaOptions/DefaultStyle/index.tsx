import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultStyleTitle } from '@/Constant'
import { defaultStyleFormData, defaultStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Badge, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardFooter from '../../Common/CommonCardFooter'

const DefaultStyle = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultStyleTitle} span={defaultStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <Form className="mega-inline">
                        <Row>
                            {defaultStyleFormData.map((data) => (
                                <Col sm={6} key={data.id}>
                                    <Card>
                                        <div className="d-flex p-20">
                                            <FormGroup className={`radio radio-${data.color} m-0`} check>
                                                <Input id={`radio${data.id}`} type="radio" name="radio1" value="option1" />
                                                <Label htmlFor={`radio${data.id}`} check>
                                                    <span className="flex-grow-1 megaoption-space">
                                                        <span className="mt-0 mega-title-badge">{data.badgeTitle}
                                                            <Badge color={data.color} className="pull-right digits">{data.digits}</Badge>
                                                        </span>
                                                        <span> {data.text}</span>
                                                    </span>
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Form>
                </CardBody>
                <CommonCardFooter footerClass='text-end' color1='primary' color2='light' />
            </Card>
        </Col>
    )
}
export default DefaultStyle