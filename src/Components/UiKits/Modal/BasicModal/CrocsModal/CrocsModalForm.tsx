import { EmailAddress, FirstName, LastName, LooksGood, SignUp } from '@/Constant';
import React from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ModalBody, Row } from 'reactstrap'

const CrocsModalForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <ModalBody>
            <Form className="needs-validation" onSubmit={handleSubmit}>
                <Row className='g-3'>
                    <Col md={6}>
                        <Label htmlFor="validationCustom01">{FirstName}</Label>
                        <Input id="validationCustom01" type="text" placeholder="Enter your name" required={true} />
                        <FormFeedback valid>{LooksGood}</FormFeedback>
                    </Col>
                    <Col md={6}>
                        <Label htmlFor="validationCustom02">{LastName}</Label>
                        <Input id="validationCustom02" type="text" placeholder="Enter your surname" required={true} />
                        <FormFeedback valid>{LooksGood}</FormFeedback>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
                            <Input id="exampleFormControlInput1" type="email" placeholder="Crocstheme@gmail.com" />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className='mb-3' check>
                            <Input id="flexCheckDefault" type="checkbox" />
                            <Label className='d-block mb-0' htmlFor="flexCheckDefault" check>{'You accept our Terms and Privacy Policy by clicking Submit below.'}</Label>
                        </FormGroup>
                        <Button color='primary'>{SignUp}</Button>
                    </Col>
                </Row>
            </Form>
        </ModalBody>
    )
}
export default CrocsModalForm;