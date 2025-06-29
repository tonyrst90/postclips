import { horizontalStyleFormData } from '@/Data/Forms/FormControls'
import React, { Fragment } from 'react'
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const HorizontalStyleForm = () => {
    return (
        <Form className="mega-horizontal">
            <Row>
                {horizontalStyleFormData.map((data) => (
                    <Fragment key={data.id}>
                        <Col sm={3}>
                            <p className="mega-title">{data.megaTitle}</p>
                        </Col>
                        {data.child.map((item) => (
                            <Col sm={9} key={item.id} className={item.colClass}>
                                <Card className={item.cardClass}>
                                    <div className="d-flex p-20">
                                        <FormGroup className={`radio radio-${item.color} m-0 w-100`} check>
                                            <Input id={`radioh${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                                            <Label className="mb-0 w-100" htmlFor={`radioh${item.id}`} check>
                                                <span className={`flex-grow-1 ${item.mediaBodyClass ? item.mediaBodyClass : ""}`} >
                                                    <span className="mt-0 mega-title-badge">{item.badgeTitle}
                                                        <Badge color={item.color} className="pull-right digits"> {item.digits}</Badge>
                                                    </span>
                                                    <span className={item.spanClass}>
                                                        {item.star &&
                                                            item.star.map((star) => (<i key={star.id} className={`icofont icofont-star ${star.class ? star.class : ''}`}></i>))}
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
export default HorizontalStyleForm