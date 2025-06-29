import { verticalStyleFormData } from '@/Data/Forms/FormControls'
import React, { Fragment } from 'react'
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const VerticalStyleForm = () => {
    return (
        <Form className="mega-vertical">
            <Row>
                {verticalStyleFormData.map((data) => (
                    <Fragment key={data.id}>
                        <Col sm={12}>
                            <p className="mega-title m-b-5">{data.megaTitle}</p>
                        </Col>
                        {data.child.map((item) => (
                            <Col sm={6} key={item.id}>
                                <Card className={item.cardClass}>
                                    <div className="d-flex p-20">
                                        <FormGroup className={`radio radio-${item.color} m-0 w-100`} check>
                                            <Input id={`radios${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                                            <Label className="mb-0 w-100" htmlFor={`radios${item.id}`} check>
                                                <span className={`flex-grow-1 ${item.mediaBodyClass ? item.mediaBodyClass : ""}`}>
                                                    <span className="mt-0 mega-title-badge">{item.badgeTitle}
                                                        <Badge color={item.color} className="pull-right digits"> {item.digits}</Badge>
                                                    </span>
                                                    <span className={item.spanClass}>
                                                        {item.star &&
                                                            item.star.map((star) => (<i key={star.id} className={`icofont icofont-star ${star.class ? star.class : ''}`} />))}
                                                        {item.spanText}
                                                    </span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Fragment>
                ))}
            </Row>
        </Form>
    )
}
export default VerticalStyleForm