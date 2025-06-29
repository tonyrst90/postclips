import { AadhaarNumber, ChooseBanks, Continue, ImagePath, PAN, Previous } from '@/Constant';
import { popularBanksList } from '@/Data/Forms/FormLayout';
import { ActiveCallbackProp } from '@/Types/Forms.type';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const BankInfoForm: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ aadhaarNumber: "", panNumber: "", bankName: "", });
    const { aadhaarNumber, panNumber, bankName } = formData;

    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (aadhaarNumber !== "" && panNumber !== "" && bankName !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col sm={6} className="bank-search">
                    <Label>{AadhaarNumber}<span className="txt-danger">*</span></Label>
                    <Input value={aadhaarNumber} name="aadhaarNumber" onChange={updateFormData} type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </Col>
                <Col sm={6} className="bank-search">
                    <Label>{PAN}<span className="txt-danger">*</span></Label>
                    <Input type="text" placeholder="xxxxxxxxxx" value={panNumber} name="panNumber" onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <h6>{ChooseBanks}</h6>
                    <div className="bank-selection">
                        <FormGroup check className="radio radio-primary ps-0">
                            <ul className="radio-wrapper">
                                {popularBanksList.map((data, index) => (
                                    <li key={index}>
                                        <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={updateFormData} />
                                        <Label htmlFor={data.bankName} check>
                                            <img src={`${ImagePath}/forms/${data.image}`} alt="bank" />
                                            <span>{data.bankName}</span>
                                        </Label>
                                    </li>
                                ))}
                            </ul>
                        </FormGroup>
                    </div>
                </Col>
                <Col xs={12} className="text-end">
                    <Button color="primary" className='me-2' onClick={() => activeCallBack(1)}>{Previous}</Button>
                    <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default BankInfoForm