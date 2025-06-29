import { AgreeTerms, ConfirmPassword, EmailAddress, FirstName, Password } from '@/Constant'
import { BasicInfoFormProps } from '@/Types/Forms.type'
import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, updateFormData }) => {
    return (
        <Form className="stepper-one needs-validation custom-input" noValidate>
            <Row className="g-3">
                <Col sm={6}>
                    <Label>{EmailAddress}<span className="txt-danger">{'*'}</span></Label>
                    <Input onChange={updateFormData} value={formData.email} name="email" type="email" placeholder="PostClips@gmail.com" />
                </Col>
                <Col sm={6}>
                    <Label>{FirstName}<span className="txt-danger">{'*'}</span></Label>
                    <Input onChange={updateFormData} value={formData.firstName} name="firstName" type="text" placeholder="Enter your name" />
                </Col>
                <Col xs={12}>
                    <Col sm={12}><Label>{Password}<span className="txt-danger">{'*'}</span></Label></Col>
                    <Input onChange={updateFormData} value={formData.password} name="password" type="password" placeholder="Enter password" />
                </Col>
                <Col xs={12}>
                    <Col sm={12}><Label>{ConfirmPassword}<span className="txt-danger">{'*'}</span></Label></Col>
                    <Input onChange={updateFormData} value={formData.confirmPassword} name="confirmPassword" type="password" placeholder="Enter confirm password" />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="inputCheckWizard" name="agreeTerms" onChange={updateFormData} type="checkbox" required />
                        <Label className="mb-0" htmlFor="inputcheckwizard" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
export default BasicInfoForm