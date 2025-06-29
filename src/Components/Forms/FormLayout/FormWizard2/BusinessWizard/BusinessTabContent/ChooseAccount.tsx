import { AccountType, Continue } from '@/Constant';
import { selectAccountTypeData } from '@/Data/Forms/FormLayout';
import { ActiveCallbackProp } from '@/Types/Forms.type';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const ChooseAccount: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState("");
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setFormData(value);
    };
    const handleNextButton = () => {
        if (formData !== "") {
            activeCallBack(2);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form className="needs-validation" noValidate onSubmit={(event) => event.preventDefault()}>
            <Row className='g-3'>
                <Col xs={12} >
                    <h5>{AccountType}</h5>
                    <p>{"It has long been known that distracting information on a page will lose a readers attention."}</p>
                </Col>
                <Col xs={12}>
                    <FormGroup check className="radio radio-primary ps-0 select-account">
                        <ul className="radio-wrapper">
                            {selectAccountTypeData.map((data, index) => (
                                <li key={index}>
                                    <Input id={data.title} value={data.title} checked={data.title === formData} type="radio" name="accountType" onChange={updateFormData} />
                                    <Label className="mb-0" htmlFor={data.title} check>
                                        <i className={`fa fa-${data.icon}`} />
                                        <span className="d-flex flex-column">
                                            <span>{data.title}</span>
                                            <span>{"Search your "}{data.title}{" information please check it"}</span>
                                        </span>
                                    </Label>
                                </li>
                            ))}
                        </ul>
                    </FormGroup>
                </Col>
                <Col xs={12} className="text-end">
                    <Button onClick={handleNextButton} color="primary">{Continue}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default ChooseAccount