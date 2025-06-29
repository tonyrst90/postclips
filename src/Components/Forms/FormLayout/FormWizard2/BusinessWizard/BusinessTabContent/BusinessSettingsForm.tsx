import { AccountName, Continue, Email, Previous, ProjectDescription } from '@/Constant';
import { ActiveCallbackProp } from '@/Types/Forms.type';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import VariationBox from './VariationBox';

const BusinessSettingsForm: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ accountName: "", email: "", description: "" });
    const { accountName, email, description } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (accountName !== "" && email !== "" && description !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col md={6}>
                    <Label>{AccountName}<span className="txt-danger">*</span></Label>
                    <Input name="accountName" value={accountName} onChange={updateFormData} type="text" />
                </Col>
                <Col md={6}>
                    <Label>{Email}<span className="txt-danger">*</span></Label>
                    <Input type="text" placeholder="org@superrito.com" name="email" value={email} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <Label>{ProjectDescription}</Label>
                    <Input type="textarea" rows={3} name="description" value={description} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <section className="main-upgrade">
                        <div>
                            <i className="fa fa-rocket" />
                            <h5 className="mb-2">{'Select team size with '}<span className="txt-primary"> {"projects"}</span></h5>
                            <p className="text-muted mb-2">{" Agile teams are cross-functional and made up of 5-11 on a regular basis team member."}</p>
                        </div>
                        <VariationBox />
                    </section>
                </Col>
                <Col xs={12} className="text-end">
                    <Button onClick={() => activeCallBack(1)} color="primary" className='me-2'>{Previous}</Button>
                    <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default BusinessSettingsForm