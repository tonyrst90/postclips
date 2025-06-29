import { FlatStyle, JointAddon, LeftAddon, LeftAndRightAddon, RaiseStyle, RightAddon, SolidStyle } from '@/Constant';
import React from 'react'
import { Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

const VariationAddonsFormContent = () => {
    return (
        <Form>
            <FormGroup className='m-form__group'>
                <Label>{LeftAddon}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary">
                        <i className="icofont icofont-pencil-alt-5 txt-primary" />
                    </InputGroupText>
                    <Input type="text" placeholder="Email" />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{RightAddon}</Label>
                <InputGroup>
                    <Input type="text" placeholder="Recipient's username" />
                    <InputGroupText className="list-light-danger">
                        <i className="icofont icofont-ui-dial-phone txt-danger" />
                    </InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{JointAddon}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary"><i className="icofont icofont-unlink txt-primary" /></InputGroupText>
                    <InputGroupText>{'0.00'}</InputGroupText>
                    <Input type="text" />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label>{LeftAndRightAddon}</Label>
                <InputGroup className="mb-3">
                    <InputGroupText className="list-light-danger"><i className="icofont icofont-ui-zoom-out txt-danger" /></InputGroupText>
                    <Input type="text" />
                    <InputGroupText className="list-light-danger"><i className="icofont icofont-ui-zoom-in txt-danger" /></InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup className="input-group-solid">
                <Label>{SolidStyle}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary"><i className="icofont icofont-users txt-primary" /></InputGroupText>
                    <Input type="text" placeholder="999999" />
                </InputGroup>
            </FormGroup>
            <FormGroup className="input-group-square">
                <Label>{FlatStyle}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-danger"><i className="icofont icofont-credit-card txt-danger" /></InputGroupText>
                    <Input type="text" />
                </InputGroup>
            </FormGroup>
            <FormGroup className="input-group-square">
                <Label>{RaiseStyle}</Label>
                <InputGroup>
                    <InputGroupText className="list-light-primary"><i className="icofont icofont-download txt-primary" /></InputGroupText>
                    <Input className="input-group-air" type="text" placeholder="https://www.example.com" />
                </InputGroup>
            </FormGroup>
            <div>
                <Label>{LeftAndRightAddon}</Label>
                <InputGroup className="pill-input-group">
                    <InputGroupText className="list-light-danger"><i className="icofont icofont-ui-copy txt-danger" /></InputGroupText>
                    <Input type="text" /><InputGroupText className="list-light-danger"><i className="icofont icofont-stock-search txt-danger" /></InputGroupText>
                </InputGroup>
            </div>
        </Form>
    )
}
export default VariationAddonsFormContent;