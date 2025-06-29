import { ImagePath } from '@/Constant'
import { solidBorderStyleFormData } from '@/Data/Forms/FormControls'
import Image from 'next/image'
import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const SolidBorderStyleForm = () => {
    return (
        <Form className="mega-inline border-style">
            <Row className="flex-column">
                {solidBorderStyleFormData.map((data) => (
                    <Col xs={12} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className="radio radio-primary" check>
                                    <Input id={`radio-${data.id}`} type="radio" name="radio1" value="option1" />
                                    <Label className="my-0" htmlFor={`radio-${data.id}`} check>
                                        <span className="flex-grow-1">
                                            <span className="d-flex list-behavior-1">
                                                <span className="flex-shrink-0">
                                                    <Image className="tab-img img-fluid" src={`${ImagePath}/blog/${data.image}`} width={134} height={86} alt="home" />
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="mb-0">{data.spanText}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </Label>
                                </FormGroup>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Form>
    )
}
export default SolidBorderStyleForm