import { StaticModalFormProp } from '@/Types/UiKits.type';
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const StaticModalForm: React.FC<StaticModalFormProp> = ({ toggle }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={12}>
                    <Label htmlFor="inputEmail4">{'Email'}</Label>
                    <Input id="inputEmail4" type="email" placeholder="Enter Your Email" />
                </Col>
                <Col md={12}>
                    <Label htmlFor="inputPassword4">{'Password'}</Label>
                    <Input id="inputPassword4" type="password" placeholder="Enter Your Password" />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="gridCheck" type="checkbox" />
                        <Label htmlFor="gridCheck" className="d-block mb-0" check>{'Check me out'}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button color='primary' onClick={toggle}>{'Sign in'}</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default StaticModalForm;