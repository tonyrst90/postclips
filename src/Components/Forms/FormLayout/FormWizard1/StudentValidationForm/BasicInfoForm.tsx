import { ConfirmPassword, EmailAddress, Name, Password } from '@/Constant'
import { StudentValidationFormProp } from '@/Types/Forms.type'
import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const BasicInfoForm: React.FC<StudentValidationFormProp> = ({ formData, updateFormData }) => {
    return (
        <Row className="g-3">
            <Col sm={6}>
                <Label>{Name}</Label>
                <Input onChange={updateFormData} value={formData.name} name="name" type="text" placeholder="Enter your name" />
            </Col>
            <Col sm={6}>
                <Label>{EmailAddress}<span className="txt-danger">*</span></Label>
                <Input name="email" onChange={updateFormData} value={formData.email} type="email" placeholder="PostClips@gmail.com" />
            </Col>
            <Col xs={12}>
                <Col sm={12}><Label>{Password}<span className="txt-danger">*</span></Label></Col>
                <Input name="password" onChange={updateFormData} value={formData.password} type="password" placeholder="Enter password" />
            </Col>
            <Col xs={12}>
                <Col sm={12}><Label>{ConfirmPassword}<span className="txt-danger">*</span></Label></Col>
                <Input name="confirmPassWord" onChange={updateFormData} value={formData.confirmPassWord} type="password" placeholder="Enter confirm password" />
            </Col>
        </Row>
    )
}
export default BasicInfoForm