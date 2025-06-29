import { InputGroupTitle, UserName, UsernameFeedback2 } from '@/Constant';
import React from 'react'
import { Col, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

const UsernameInputs = () => {
    return (
        <>
            <Row>
                <Col sm={3}><Label>{InputGroupTitle}</Label></Col>
                <Col sm={9}>
                    <InputGroup className="mb-3">
                        <InputGroupText>{'@'}</InputGroupText>
                        <FormGroup floating>
                            <Input id="floatingInputGroup1" type="text" />
                            <Label htmlFor="floatingInputGroup1">{UserName}</Label>
                        </FormGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{InputGroupTitle}</Label></Col>
                <Col sm={9}>
                    <InputGroup className="has-validation">
                        <InputGroupText>{'@'}</InputGroupText>
                        <FormGroup floating className='is-invalid'>
                            <Input id="floatingInputGroup2" type="text" className='is-invalid' required />
                            <Label htmlFor="floatingInputGroup2">{UserName}</Label>
                        </FormGroup>
                        <FormFeedback>{UsernameFeedback2}</FormFeedback>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}
export default UsernameInputs;