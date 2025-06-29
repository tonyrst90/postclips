import React from 'react'
import { Col, Form, Label, Row } from 'reactstrap'
import Cleave from "cleave.js/react";
import { Date, DateFormatTitle, DateFormatType } from '@/Constant';

const DateFormat = () => {
    return (
        <Col sm={6} >
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{DateFormatTitle}</h6>
                <Form>
                    <Row className='g-3'>
                        <Col xs={12}>
                            <Label className="col-form-label" >{Date}</Label>
                            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["d", "m", "Y"], }} placeholder="DD-MM-YYYY" />
                        </Col>
                        <Col xs={12} >
                            <Label className="col-form-label">{DateFormatType}</Label>
                            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["m", "Y"] }} placeholder="MM-YYYY" />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    )
}
export default DateFormat