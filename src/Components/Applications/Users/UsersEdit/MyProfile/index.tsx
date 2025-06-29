import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, MyProfileTitle } from '@/Constant';
import Image from 'next/image';
import React from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const MyProfile = () => {
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' tagClass='card-title mb-0' title={MyProfileTitle} />
                <CardBody>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className="mb-2">
                            <div className="profile-title">
                                <div className="d-flex"><Image className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} width={70} height={70} />
                                    <div className="flex-grow-1">
                                        <h3 className="mb-1">{'MARK JECNO'}</h3>
                                        <p>{'DESIGNER'}</p>
                                    </div>
                                </div>
                            </div>
                            <FormGroup>
                                <h6><Label>{'Bio'}</Label></h6>
                                <Input type="textarea" rows="5" defaultValue='On the other hand, we denounce with righteous indignation' />
                            </FormGroup>
                            <FormGroup>
                                <Label>{'Email-Address'}</Label>
                                <Input type="email" placeholder="your-email@domain.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label>{'Password'}</Label>
                                <Input type="password" defaultValue='password' />
                            </FormGroup>
                            <FormGroup>
                                <Label>{'Website'}</Label>
                                <Input placeholder="http://Uplor.com" type="url" />
                            </FormGroup>
                            <div className="form-footer">
                                <Button color='primary' block>{'Save'}</Button>
                            </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
export default MyProfile;