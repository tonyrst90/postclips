import { AgreeTerms, CardHolder, CardNumber, Continue, CVVNumber, Expiration, Previous } from '@/Constant';
import { listOfYears } from '@/Data/Forms/FormLayout';
import { ActiveCallbackProp } from '@/Types/Forms.type';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const PayDetailsForm: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ cardHolderName: "", cardNumber: "", expiryDate: "", expiryYear: "", cvvNumber: "", });
    const { cardHolderName, cardNumber, expiryDate, expiryYear, cvvNumber } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (cardHolderName !== "" && cardNumber !== "" && expiryDate !== "" && expiryYear !== "" && cvvNumber !== "") {
            activeCallBack(5);;
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col md={6}>
                    <Label>{CardHolder}</Label>
                    <Input value={cardHolderName} name="cardHolderName" onChange={updateFormData} type="text" />
                </Col>
                <Col md={6}>
                    <Label>{CardNumber}</Label>
                    <Input value={cardNumber} name="cardNumber" onChange={updateFormData} type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </Col>
                <Col xs={12}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Label>{Expiration}</Label>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Input id="expiration" type="number" required placeholder="xx/xx" value={expiryDate} name="expiryDate" onChange={updateFormData} />
                                </Col>
                                <Col md={6}>
                                    <Input value={expiryYear} name="expiryYear" type="select" onChange={updateFormData} className="f-w-400 f-14 text-gray">
                                        <option value="" disabled>{'Year'}</option>
                                        {listOfYears.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Label>{CVVNumber}</Label>
                            <Input type="number" required value={cvvNumber} name="cvvNumber" onChange={updateFormData} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <FormGroup check className="mb-0">
                        <Input id="invalidCheckboxWizard" type="checkbox" />
                        <Label className="mb-0" htmlFor="invalidCheckboxWizard" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12} className="text-end">
                    <Button color="primary" className='me-2' onClick={() => activeCallBack(3)}>{Previous}</Button>
                    <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default PayDetailsForm