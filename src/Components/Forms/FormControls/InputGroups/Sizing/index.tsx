import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DefaultInputText, LargeInput, SizingTitle, SmallInput } from '@/Constant';
import { sizingSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'

const Sizing = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SizingTitle} span={sizingSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup size="sm">
                        <InputGroupText> {SmallInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup size="default">
                        <InputGroupText> {DefaultInputText} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputGroupText> {LargeInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Sizing;