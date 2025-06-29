import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ButtonAddonsTitle, Submit } from '@/Constant';
import { buttonAddonsSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap'

const ButtonAddons = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ButtonAddonsTitle} span={buttonAddonsSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Button color='secondary' outline id="button-addon1">{'$ 25'}</Button>
                        <Input type="text" id="button-addon1" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" id="button-addon2" />
                        <Button color='warning' outline id="button-addon2">{Submit}</Button>
                    </InputGroup>
                    <InputGroup>
                        <Button color='secondary'><span>&#8364; </span></Button>
                        <Button color='warning'>{'0.0114419'}</Button>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" />
                        <Button color='secondary'><span>&#8377;</span></Button>
                        <Button color='warning'>{'500'}</Button>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ButtonAddons;