import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { AddContactFormProps, ContactFormProps } from '@/Types/Contact.type';
import { createUser } from '@/Redux/Reducers/ContactSlice';

const AddContactForm: React.FC<AddContactFormProps> = ({ setModal, toggle }) => {
    const [validate, setValidate] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm<ContactFormProps>();
    const addContact: SubmitHandler<ContactFormProps> = (data) => {
        if (data) {
            setValidate(true);
            dispatch(createUser({ data, defaultUser: `user/user.png` }));
            setModal(false);
        } else {
            console.error('PLease check you details');
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addContact)} noValidate>
            <Row className="g-2">
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{'Name'}</Label>
                        <Row>
                            <Col sm={6}>
                                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''} ${validate && !errors.name ? 'is-valid' : ''}`} placeholder="First Name" {...register('name', { required: true })} />
                                {errors.name && (<FormFeedback>{errors.name && ('First name is required')}</FormFeedback>)}
                            </Col>
                            <Col sm={6}>
                                <input type="text" className={`form-control ${errors.surname ? 'is-invalid' : ''} ${validate && !errors.surname ? 'is-valid' : ''}`} placeholder="Last Name" {...register('surname', { required: true })} />
                                {errors.surname && (<FormFeedback>{errors.surname && ('Last name is required')}</FormFeedback>)}
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{'Email Address'}</Label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''} ${validate && !errors.email ? 'is-valid' : ''}`} {...register('email', { required: true })} />
                        {errors.email && (<FormFeedback>{errors.email && ('Please enter your email.')}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='my-0'>
                        <Label>{'Phone'}</Label>
                        <Row>
                            <Col sm={6}>
                                <input type="number" className={`form-control ${errors.mobile ? 'is-invalid' : ''} ${validate && !errors.mobile ? 'is-valid' : ''}`} {...register('mobile', { required: true })} />
                                {errors.mobile && (<FormFeedback>{errors.mobile && ('Please enter your 10 digit mobile number')}</FormFeedback>)}
                            </Col>
                            <Col sm={6}>
                                <Input type="select">
                                    <option>{'Mobile'}</option>
                                    <option>{'Work'}</option>
                                    <option>{'Others'}</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
            <Button color='secondary' className='me-2'>{'Save'}</Button>
            <Button color='primary' onClick={toggle} >{'Cancel'}</Button>
        </Form>
    )
}
export default AddContactForm;