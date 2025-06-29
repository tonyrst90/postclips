import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '@/Types/Forms.type';
import { ContactDetails, Continue, Email, JoinOrganizationType, OrganizationDescription, OrganizationName, Previous } from '@/Constant';

const ContactDetailsForm: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ organizationName: "", email: "", description: "", organizationType: "" });
    const { organizationName, email, description, organizationType } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (organizationName !== "" && email !== "" && description !== "" && organizationType !== "") {
            activeCallBack(4);;
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col xs={12} >
                    <h6>{ContactDetails}</h6>
                    <p>{" Please visit the documentation page if you require further information."}</p>
                </Col>
                <Col sm={6}>
                    <Label >{OrganizationName}<span className="txt-danger">*</span></Label>
                    <Input type="text" placeholder="Gekko & Co." name="organizationName" value={organizationName} onChange={updateFormData} />
                </Col>
                <Col sm={6}>
                    <Label>{Email}<span className="txt-danger">*</span></Label>
                    <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <Label >{JoinOrganizationType}<span className="txt-danger">*</span></Label>
                    <Input type="select" value={organizationType} name="organizationType" onChange={updateFormData} className="f-w-400 f-14 text-gray">
                        <option value="" disabled>{'Join organization type'}</option>
                        <option value="1">{'Technology'}</option>
                        <option value="2">{'Culture'}</option>
                        <option value="3">{'NGO'} </option>
                        <option value="3">{'Environment'}</option>
                        <option value="3">{'Life cycle'}</option>
                    </Input>
                </Col>
                <Col xs={12}>
                    <Label>{OrganizationDescription}</Label>
                    <Input type="textarea" value={description} name="description" onChange={updateFormData} placeholder="Share your problems and another issues" />
                </Col>
                <Col xs={12} className="text-end">
                    <Button color="primary" className='me-2' onClick={() => activeCallBack(2)}>{Previous}</Button>
                    <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default ContactDetailsForm