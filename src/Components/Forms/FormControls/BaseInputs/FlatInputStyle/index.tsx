import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FlatInputStyleTitle, MultiplePaintingTitle, PleaseComments, RomanNumberTitle } from '@/Constant';
import { flatInputStyleSubTitle, multiplePaintingFlatData, romanFlatInputData } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import CommonSelectDropdown from '../Common/CommonSelectDropdown';

const FlatInputStyle = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FlatInputStyleTitle} span={flatInputStyleSubTitle} />
                <Form className="theme-form dark-inputs">
                    <CardBody>
                        <Row>
                            <CommonSelectDropdown title={RomanNumberTitle} inputClass='btn-square digits custom-scrollbar' options={romanFlatInputData} />
                        </Row>
                        <Row>
                            <CommonSelectDropdown title={MultiplePaintingTitle} options={multiplePaintingFlatData} inputClass='btn-square digits custom-scrollbar' multiple={true} optionClass='rounded-0' />
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Label htmlFor="exampleFormControlTextarea14">{PleaseComments}</Label>
                                    <Input type="textarea" className="btn-square" id="exampleFormControlTextarea14" rows="3" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>
        </Col>
    )
}
export default FlatInputStyle;