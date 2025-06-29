import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ReactstrapCalendarTitle } from '@/Constant'
import { reactstrapCalendarData } from '@/Data/Forms/FormWidgets'
import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const ReactstrapCalendar = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ReactstrapCalendarTitle} />
                <CardBody className="card-wrapper">
                    {reactstrapCalendarData.map((data) => (
                        <FormGroup key={data.id}>
                            <Row>
                                <Col md={3}>
                                    <Label className="col-form-label">{data.labelText}</Label>
                                </Col>
                                <Col md={9}>
                                    <Input className="digits" type={data.type} defaultValue={data.value} />
                                </Col>
                            </Row>
                        </FormGroup>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default ReactstrapCalendar