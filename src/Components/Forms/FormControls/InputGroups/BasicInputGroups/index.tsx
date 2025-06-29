import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Basic, BasicInputGroupsTitle, Wrapping, YourVanityUrl } from '@/Constant';
import { basicInputGroupsSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import CommonCardFooter from '../../Common/CommonCardFooter';

const BasicInputGroups = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BasicInputGroupsTitle} span={basicInputGroupsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <Col md={12}>
                            <div className="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
                                <h6 className="sub-title fw-bold">{Basic}</h6>
                                <InputGroup>
                                    <InputGroupText>{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                                <InputGroup>
                                    <Input type="text" placeholder="Recipient's username" />
                                    <InputGroupText>{"@example.com"}</InputGroupText>
                                </InputGroup>
                                <Label htmlFor="basic-url">{YourVanityUrl}</Label>
                                <InputGroup>
                                    <InputGroupText>{"https://example.com/"}</InputGroupText>
                                    <Input type="text" />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupText>{"$"}</InputGroupText>
                                    <Input type="text" /><InputGroupText>{".00"}</InputGroupText>
                                </InputGroup>
                                <InputGroup>
                                    <Input type="text" placeholder="Username" /><InputGroupText>{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Server" />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupText>{'With textarea'}</InputGroupText>
                                    <Input type="textarea" />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="card-wrapper border rounded-3 input-radius">
                                <h6 className="sub-title fw-bold">{Wrapping} </h6>
                                <p className="f-m-light mb-1">{'Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with '}<code>{'.flex-nowrap'}</code>.</p>
                                <InputGroup className="flex-nowrap"><InputGroupText>{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CommonCardFooter color1='primary' color2='light' />
            </Card>
        </Col>
    )
}
export default BasicInputGroups;