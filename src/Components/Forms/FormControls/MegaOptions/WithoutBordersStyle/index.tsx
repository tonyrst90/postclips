import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithoutBordersStyleTitle } from '@/Constant'
import { withoutBordersStyleFormData, withoutBordersStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Badge, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardFooter from '../../Common/CommonCardFooter'

const WithoutBordersStyle = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={WithoutBordersStyleTitle} span={withoutBordersStyleSubTitle} />
                <CardBody>
                    <Form className="mega-inline plain-style">
                        <Row>
                            {withoutBordersStyleFormData.map((data) => (
                                <Col sm={6} key={data.id}>
                                    <Card>
                                        <div className="d-flex p-20">
                                            <FormGroup className={`checkbox checkbox-${data.color} m-0"`} check>
                                                <Input id={`checkbox${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                                                <Label htmlFor={`checkbox${data.id}`} check>
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
                <CommonCardFooter footerClass="text-end" color1="warning" color2="transparent" btn2Class="list-light-warning" />
            </Card>
        </Col>
    )
}
export default WithoutBordersStyle