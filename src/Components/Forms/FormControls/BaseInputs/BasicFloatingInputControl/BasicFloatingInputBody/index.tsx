import { Comments, EmailAddress, InputWithValue, InvalidInput, Layout, OpenSelectMenu, Password, ValidInput } from '@/Constant';
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import BaseFloatingLayoutContent from './BaseFloatingLayoutContent';
import UsernameInputs from './UsernameInputs';
import CommonOpenMenu from '../../Common/CommonOpenMenu';
import { romanOpenMenu } from '@/Data/Forms/FormControls';

const BasicFloatingInputBody = () => {
    return (
        <Col>
            <Row>
                <Col sm={3}><Label>{ValidInput}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInputValue" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                        <Label htmlFor="floatingInputValue">{InputWithValue}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{InvalidInput}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInputInvalid" type="email" placeholder="name@example.com" defaultValue="test@example.com" invalid />
                        <Label htmlFor="floatingInputInvalid">{InvalidInput}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{Comments}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingTextarea" type="textarea" placeholder="Leave a comment here" />
                        <Label htmlFor="floatingTextarea">{Comments}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{EmailAddress}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingInput" type="email" />
                        <Label htmlFor="floatingInput">{EmailAddress}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{Password}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingPassword1" type="password" />
                        <Label htmlFor="floatingPassword1">{Password}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{Comments}</Label></Col>
                <Col sm={9}>
                    <FormGroup floating>
                        <Input id="floatingTextarea2" type="textarea" placeholder="Leave a comment here" />
                        <Label htmlFor="floatingTextarea2">{Comments}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={3}><Label>{OpenSelectMenu}</Label></Col>
                <CommonOpenMenu colClass='col-sm-9' inputId='floatingSelect' options={romanOpenMenu} />
            </Row>
            <UsernameInputs />
            <Row className="mb-0">
                <Col sm={3}><Label>{Layout}</Label></Col>
                <BaseFloatingLayoutContent />
            </Row>
        </Col>
    )
}
export default BasicFloatingInputBody;