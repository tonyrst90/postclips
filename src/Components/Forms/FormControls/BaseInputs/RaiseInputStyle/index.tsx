import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ColorSelectTitle, Comments, EmailAddress, Password, PixelstrapThemeTitle, RaiseInputStyleTitle } from '@/Constant'
import { colorsListBaseInput, pixelstrapRaisetList, raiseInputStyleSubTitle } from '@/Data/Forms/FormControls'
import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'
import CardFooterSection from '../Common/CardFooterSection'

const RaiseInputStyle = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RaiseInputStyleTitle} span={raiseInputStyleSubTitle} />
                <Form className="theme-form dark-inputs" onSubmit={handleSubmit}>
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput15">{EmailAddress}</Label>
                                    <Input className="input-air-primary" id="exampleFormControlInput15" type="email" placeholder="name@example.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleInputPassword16">{Password}</Label>
                                    <Input className="input-air-primary" id="exampleInputPassword16" type="password" placeholder="Password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row><CommonSelectDropdown inputClass='input-air-primary digits custom-scrollbar' title={PixelstrapThemeTitle} options={pixelstrapRaisetList} /></Row>
                        <Row><CommonSelectDropdown title={ColorSelectTitle} options={colorsListBaseInput} inputClass='input-air-primary digits custom-scrollbar' multiple={true} optionClass='rounded-0' /></Row>
                        <Row>
                            <Col>
                                <div>
                                    <Label htmlFor="exampleFormControlTextarea19">{Comments}</Label>
                                    <Input className="input-air-primary" id="exampleFormControlTextarea19" type="textarea" rows='3' />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}
export default RaiseInputStyle;