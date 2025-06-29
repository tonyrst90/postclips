import { ColorPicker, Date, DateAndTime, MaximumLength, Month, Number, Password, Placeholder, StaticMagicalText, StaticText, Telephone, Time, URL, Week } from '@/Constant';
import React from 'react'
import { Col, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import DatalistExample from './DatalistExample';

const BasicHtmlInputBody = () => {
    return (
        <Row>
            <Col>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Placeholder}</Label></Col>
                    <Col sm={9}><Input type="text" placeholder="Type your title in Placeholder" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Password}</Label></Col>
                    <Col sm={9}><Input type="password" placeholder="Password input" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Number}</Label></Col>
                    <Col sm={9}><Input type="number" placeholder="Number" className="digits" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Telephone}</Label></Col>
                    <Col sm={9}><Input type="tel" defaultValue="91-(999)-999-999" className="m-input digits" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{URL}</Label></Col>
                    <Col sm={9}><Input type="url" defaultValue="https://getbootstrap.com" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{DateAndTime}</Label></Col>
                    <Col sm={9}><Input className="digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Date}</Label></Col>
                    <Col sm={9}><Input className="digits" type="date" defaultValue="2018-09-01" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Month}</Label></Col>
                    <Col sm={9}><Input className="digits" type="month" defaultValue="2018-01" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{Week}</Label></Col>
                    <Col sm={9}><Input className="digits" type="week" defaultValue="2018-W09" /></Col>
                </Row>
                <DatalistExample />
                <Row className="mb-3">
                    <Col sm={3}><Label>{Time}</Label></Col>
                    <Col sm={9}><Input className="digits" type="time" defaultValue="21:45:00" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label className="pt-0">{ColorPicker}</Label></Col>
                    <Col sm={2}><Input type="color" value='#003FDD' color='' className='form-control-color' /></Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={3}><Label>{MaximumLength}</Label></Col>
                    <Col sm={9}><Input type="text" placeholder="Content must be in 6 characters" maxLength={6} /></Col>
                </Row>
                <Row>
                    <Col sm={3}><Label>{StaticText}</Label></Col>
                    <Col sm={9}><FormText>{StaticMagicalText}</FormText></Col>
                </Row>
            </Col>
        </Row>
    )
}
export default BasicHtmlInputBody;