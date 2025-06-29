import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CheckboxesAndRadiosTitle } from '@/Constant';
import { checkBoxesAndRadiosSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'

const CheckboxesAndRadios = () => {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={CheckboxesAndRadiosTitle} span={checkBoxesAndRadiosSubTitle} />
                <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
                    <InputGroup>
                        <InputGroupText>
                            <Input className="form-check-input mt-0" type="checkbox" />
                        </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupText>
                            <Input className="form-check-input mt-0" type="radio" defaultChecked />
                        </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CheckboxesAndRadios;