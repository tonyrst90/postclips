import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { basicSingleList, dayList, monthList } from '@/Data/Applications/Contacts'

const MoreInformationInputs = () => {
    return (
        <Row className="g-2 more-data mt-2">
            <Col md={12}>
                <FormGroup className='mt-0'>
                    <Label>{'URLS'}</Label>
                    <Row>
                        <Col sm={6} lg={6}><Input type="text" required /></Col>
                        <Col sm={6} lg={4}>
                            <Input type='select' className="js-example-basic-single">
                                {basicSingleList.map((item) => (
                                    <option value={item.value} key={item.id}>{item.text}</option>
                                ))}
                            </Input>
                        </Col>
                    </Row>
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup className='mt-0'>
                    <Label>{'Personal'}</Label>
                    <div className="d-block">
                        <Label className="me-3" htmlFor="edo-ani">
                            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked /><span>{'Male'}</span>
                        </Label>
                        <Label htmlFor="edo-ani1">
                            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" /><span>{'Female'}</span>
                        </Label>
                    </div>
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup className='mt-0'>
                    <Row>
                        <Col sm={4} lg={2}>
                            <Input type="select" id="birth_day">
                                <option className="f-w-600">{'Day'}</option>
                                {dayList.map((list, i) => (<option key={i}>{list}</option>))}
                            </Input>
                        </Col>
                        <Col sm={4} lg={3}>
                            <Input type="select">
                                <option className="f-w-600">{'Month'}</option>
                                {monthList.map((list, index) => (<option key={index}>{list}</option>))}
                            </Input>
                        </Col>
                        <Col sm={4} lg={3}>
                            <Input id="birth_year" type="text" />
                        </Col>
                    </Row>
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup className='mt-0'>
                    <Row>
                        <Col sm={6}><Label>{'Personality'}</Label></Col>
                        <Input type="text" required />
                        <Col sm={6}><Label>{'Interest'}</Label></Col>
                        <Input type="text" required />
                    </Row>
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup>
                    <Label>{'Home Address'}</Label>
                    <Row>
                        <Col xs={12}><div className="mb-2"><Input type="text" placeholder="Address" /></div></Col>
                        <Col sm={6}><div className="mb-2"><Input type="text" placeholder="City" /></div></Col>
                        <Col sm={6}><div className="mb-2"><Input type="text" placeholder="State" /></div></Col>
                        <Col sm={6}><div className="mb-2"><Input type="text" placeholder="Country" /></div></Col>
                        <Col sm={6}><div className="mb-2"><Input type="number" placeholder="Pin Code" /></div></Col>
                    </Row>
                </FormGroup>
            </Col>
        </Row>
    )
}
export default MoreInformationInputs;