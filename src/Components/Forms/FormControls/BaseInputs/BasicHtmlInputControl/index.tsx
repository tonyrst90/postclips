import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicHtmlInputControlTitle } from '@/Constant'
import { basicHTMLInputControlSubTitle } from '@/Data/Forms/FormControls'
import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap'
import BasicHtmlInputBody from './BasicHtmlInputBody'
import CardFooterSection from '../Common/CardFooterSection'

const BasicHtmlInputControl = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={BasicHtmlInputControlTitle} span={basicHTMLInputControlSubTitle} />
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <CardBody className="custom-input">
                        <BasicHtmlInputBody />
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}
export default BasicHtmlInputControl;