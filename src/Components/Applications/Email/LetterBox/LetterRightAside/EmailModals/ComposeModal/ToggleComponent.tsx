import { ToggleComponentProps } from '@/Types/Email.type';
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';

const ToggleComponent: React.FC<ToggleComponentProps> = ({ ccShow, bccShow }) => {
    return (
        <>
            <FormGroup>
                <Row className={`collapse ${ccShow ? "show" : ""}`} id="collapseCc">
                    <Col sm={2}>
                        <Label className="col-form-label" htmlFor="composeTo"> Cc: </Label>
                    </Col>
                    <Col sm={10}>
                        <Input id="composeTo" type="email" />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row className={`collapse ${bccShow ? "show" : ""}`} id="collapseBcc">
                    <Col sm={2}>
                        <Label className="col-form-label" htmlFor="composeTo"> Bcc: </Label>
                    </Col>
                    <Col sm={10}>
                        <Input id="composeTo" type="email" />
                    </Col>
                </Row>
            </FormGroup>
        </>
    )
}
export default ToggleComponent;