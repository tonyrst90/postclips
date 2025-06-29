import { AboveInformationCorrect, CardNumber, Cvv, Expiration, SelectPaymentMethod, Submit, UploadDocumentation } from '@/Constant'
import { paymentModeName } from '@/Data/Forms/FormLayout'
import { VerticalWizardFormProps } from '@/Types/Forms.type'
import React from 'react'
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'

const CartInfoForm: React.FC<VerticalWizardFormProps> = ({ formData, updateFormData }) => {
    return (
        <Form className="needs-validation custom-input" noValidate>
            <Row className='g-3'>
                <Col xxl={6}>
                    <div className="card-wrapper border rounded-3 checkbox-checked">
                        <h3 className="sub-title">{SelectPaymentMethod}</h3>
                        <div className="radio-form">
                            {paymentModeName.map((data, index) => (
                                <FormGroup check key={index}>
                                    <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" defaultChecked={index === 2 ? true : false} />
                                    <Label htmlFor={`flexRadioDefault${index}`} check>{data}</Label>
                                </FormGroup>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xs={12}>
                            <InputGroup className="mb-3">
                                <Input type="text" placeholder="Recipient's username" name="recipientUserName" value={formData.recipientUserName} onChange={updateFormData} />
                                <Button outline color="secondary">{Submit}</Button>
                            </InputGroup>
                        </Col>
                        <Col xs={12}>
                            <InputGroup>
                                <InputGroupText>{'@'}</InputGroupText>
                                <Input type="text" placeholder="Username" name="userName" value={formData.userName} onChange={updateFormData} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} sm={6}>
                    <Label>{CardNumber}</Label>
                    <Input type="number" placeholder="xxxx xxxx xxxx xxxx" name="cardNumber" value={formData.cardNumber} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label htmlFor="validationDates">{Expiration}</Label>
                    <Input id="validationDates" type="number" placeholder="xx/xx" name="expirationDate" value={formData.expirationDate} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label htmlFor="cvvNumber-b">{Cvv}</Label>
                    <Input id="cvvNumber-b" type="text" name="cvvNumber" value={formData.cvvNumber} onChange={updateFormData} />
                </Col>
                <Col md={12} sm={6}>
                    <Label htmlFor="formFile2">{UploadDocumentation}</Label>
                    <Input id="formFile2" type="file" name="documentationName" onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <FormGroup check className="mb-0">
                        <Input id="invalidCheck-b" type="checkbox" required />
                        <Label htmlFor="invalidCheck-b" check>{AboveInformationCorrect}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
export default CartInfoForm