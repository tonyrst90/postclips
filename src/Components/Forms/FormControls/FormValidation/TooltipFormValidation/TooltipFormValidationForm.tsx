import DropItem from '@/Components/Forms/Common/DropItem';
import { City, FirstName, LastName, LooksGood, SubmitForm, UserName, Zip } from '@/Constant';
import { FormDataTypes } from '@/Types/Forms.type';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Col, Form, FormFeedback, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

const TooltipFormValidationForm = () => {
    const [selectedOption, setSelectedOption] = useState<null | string>(null);
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataTypes>();
    const onSubmit = () => {
        setValidate(true);
    };
    return (
        <Form className="needs-validation custom-input" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className="g-3">
                <Col md={4} className="position-relative">
                    <Label>{FirstName}</Label>
                    <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''} ${validate && !errors.firstName ? 'is-valid' : ''}`} placeholder="Mark" {...register("firstName", { required: "Please enter your valid name" })} />
                    {errors.firstName && (<FormFeedback tooltip>{errors.firstName.message}</FormFeedback>)}
                    {validate && !errors.firstName && <FormFeedback tooltip valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col md={4} className="position-relative">
                    <Label>{LastName}</Label>
                    <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''} ${validate && !errors.lastName ? 'is-valid' : ''}`} placeholder="Otto" {...register("lastName", { required: "Please enter your valid name" })} />
                    {errors.lastName && (<FormFeedback tooltip>{errors.lastName.message}</FormFeedback>)}
                    {validate && !errors.lastName && <FormFeedback tooltip valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col md={4} className="position-relative">
                    <Label>{UserName}</Label>
                    <InputGroup className="has-validation">
                        <InputGroupText>{'@'}</InputGroupText>
                        <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''} ${validate && !errors.username ? 'is-valid' : ''}`} placeholder="Otto" {...register("username", { required: "Please choose a unique and valid username." })} />
                        {errors.username && (<FormFeedback tooltip>{errors.username.message}</FormFeedback>)}
                        {validate && !errors.username && <FormFeedback tooltip valid>{LooksGood}</FormFeedback>}
                    </InputGroup>
                </Col>
                <Col md={6} className="position-relative">
                    <Label htmlFor="validationTooltip03">{City}</Label>
                    <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''} ${validate && !errors.city ? 'is-valid' : ''}`} {...register("city", { required: "Please provide a valid city" })} />
                    {errors.city && (<FormFeedback tooltip>{errors.city.message}</FormFeedback>)}
                    {validate && !errors.city && <FormFeedback tooltip valid>{LooksGood}</FormFeedback>}
                </Col>
                <DropItem tip={true} validate={true} colClass='position-relative col-md-3' className={`${validate && !selectedOption ? "is-invalid" : ""} ${validate && selectedOption ? 'is-valid' : ''}`} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <Col md={3} className="position-relative">
                    <Label>{Zip}</Label>
                    <input type="text" className={`form-control ${errors.zip ? 'is-invalid' : ''} ${validate && !errors.zip ? 'is-valid' : ''}`} {...register('zip', { required: 'Please provide a valid zip' })} />
                    {errors.zip && <FormFeedback tooltip>{errors.zip.message}</FormFeedback>}
                    {validate && !errors.zip && <FormFeedback tooltip valid>{LooksGood}</FormFeedback>}
                </Col>
                <Col xs={12}>
                    <Button color="primary">{SubmitForm}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default TooltipFormValidationForm;