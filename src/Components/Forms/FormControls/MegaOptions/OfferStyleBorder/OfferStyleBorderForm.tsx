import { ImagePath } from '@/Constant'
import { offerStyleBorderFormData } from '@/Data/Forms/FormControls'
import Image from 'next/image'
import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const OfferStyleBorderForm = () => {
    return (
        <Form className="mega-inline offer-style">
            <Row className="flex-column">
                {offerStyleBorderFormData.map((data) => (
                    <Col xs={12} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className={`checkbox checkbox-${data.color}`} check>
                                    <Input id={`checkbox-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                                    <Label className="my-0" htmlFor={`checkbox-${data.id}`} check>
                                        <span className="flex-grow-1">
                                            <span className="d-flex list-behavior-1">
                                                <span className="flex-shrink-0">
                                                    <Image className="tab-img img-fluid" src={`${ImagePath}/email-template/${data.image}`} width={157} height={86} alt="image" />
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
export default OfferStyleBorderForm