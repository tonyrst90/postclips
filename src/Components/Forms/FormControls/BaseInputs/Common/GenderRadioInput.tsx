import { Female, Male } from '@/Constant';
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

const GenderRadioInput = () => {
    return (
        <Row>
            <Col>
                <FormGroup className="d-flex gap-3 checkbox-checked">
                    <FormGroup check>
                        <Label className="mb-0" check>
                            <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />{Male}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label className="mb-0" check>
                            <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />{Female}
                        </Label>
                    </FormGroup>
                </FormGroup>
            </Col>
        </Row>
    )
}
export default GenderRadioInput;