import { AboveInformationCorrect, CardNumber, CVVNumber, Expiration, PlaceholderName, UploadDocumentation } from '@/Constant'
import { BasicInfoFormProps } from '@/Types/Forms.type'
import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const CartInfoForm: React.FC<BasicInfoFormProps> = ({ formData, updateFormData }) => {
    return (
        <Form className="stepper-two needs-validation custom-input" noValidate >
            <Row className='g-3'>
                <Col md={12} >
                    <Label>{PlaceholderName}</Label>
                    <Input name='placeHolderName' value={formData.placeHolderName} onChange={updateFormData} type="text" placeholder="Placeholder name" />
                </Col>
                <Col xxl={4} sm={6} >
                    <Label>{CardNumber}</Label>
                    <Input name='cardNumber' value={formData.cardNumber} onChange={updateFormData} type="text" placeholder="xxxx xxxx xxxx xxxx" />
                </Col>
                <Col xxl={4} sm={6}>
                    <Label>{Expiration}</Label>
                    <Input name='expiration' value={formData.expiration} onChange={updateFormData} type="number" placeholder="xx/xx" />
                </Col>
                <Col xxl={4}>
                    <Label>{CVVNumber}</Label>
                    <Input name='cvvNumber' value={formData.cvvNumber} onChange={updateFormData} type="text" />
                </Col>
                <Col xs={12}>
                    <Label>{UploadDocumentation}</Label>
                    <Input name='uploadDocumentation' onChange={updateFormData} type="file" />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id='invalidCheck-a' name='informationCheckBox' onChange={updateFormData} type="checkbox" required />
                        <Label htmlFor="invalidCheck-a" check>{AboveInformationCorrect}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
export default CartInfoForm