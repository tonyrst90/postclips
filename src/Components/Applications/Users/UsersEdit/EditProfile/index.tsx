import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { EditProfileTitle } from '@/Constant';
import { usersCountryList } from '@/Data/Applications/Users';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onEditSubmit = () => {
        alert('Form is Submitted successfully');
    };
    return (
        <Col xl={8}>
            <Card>
                <Form onSubmit={handleSubmit(onEditSubmit)}>
                    <CommonCardHeader headClass='pb-0' tagClass='card-title mb-0' title={EditProfileTitle} />
                    <CardBody>
                        <Row>
                            <Col md={5}>
                                <FormGroup>
                                    <Label>{'Company'}</Label>
                                    <input className="form-control" type="text" placeholder="Company" {...register('company', { required: true })} /><span style={{ color: 'red' }}>{errors.company && 'Company is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={3}>
                                <FormGroup>
                                    <Label>{'Username'}</Label>
                                    <input className="form-control" type="text" placeholder="Username" {...register('username', { required: true })} /><span style={{ color: 'red' }}>{errors.username && 'Username is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={4}>
                                <FormGroup>
                                    <Label>{'Email Address'}</Label>
                                    <input className="form-control" type="email" placeholder="Email" {...register('emailAddress', { required: true })} /><span style={{ color: 'red' }}>{errors.emailAddress && 'EmailAddress is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{'First Name'}</Label>
                                    <input className="form-control" type="text" placeholder="First name" {...register('firstName', { required: true })} /><span style={{ color: 'red' }}>{errors.firstName && 'FirstName is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{'Last Name'}</Label>
                                    <input className="form-control" type="text" placeholder="Last name" {...register('lastName', { required: true })} /><span style={{ color: 'red' }}>{errors.lastName && 'LastName is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label>{'Address'}</Label>
                                    <input className="form-control" type="text" placeholder="Home Address" {...register('address', { required: true })} /><span style={{ color: 'red' }}>{errors.address && 'Address is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={4}>
                                <FormGroup>
                                    <Label>{'City'}</Label>
                                    <input className="form-control" type="text" placeholder="City" {...register('city', { required: true })} /><span style={{ color: 'red' }}>{errors.city && 'City is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={3}>
                                <FormGroup>
                                    <Label>{'Postal Code'}</Label>
                                    <input className="form-control" type="number" placeholder="ZIP Code" {...register('postalCode', { required: true })} /><span style={{ color: 'red' }}>{errors.postalCode && 'Zip code is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label>{'Country'}</Label>
                                    <Input type="select" className="btn-square">
                                        {usersCountryList.map((items, i) => <option key={i}>{items}</option>)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <div>
                                    <Label>{'About Me'}</Label>
                                    <Input type="textarea" rows="4" placeholder="Enter About your description" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end"><Button color='primary'>{'Update Profile'}</Button></CardFooter>
                </Form>
            </Card>
        </Col>
    )
}
export default EditProfile;