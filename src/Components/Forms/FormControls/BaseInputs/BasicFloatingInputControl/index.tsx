import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicFloatingInputControlTitle } from '@/Constant'
import { basicFloatingInputControlSubTitle } from '@/Data/Forms/FormControls'
import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import BasicFloatingInputBody from './BasicFloatingInputBody'
import CardFooterSection from '../Common/CardFooterSection'

const BasicFloatingInputControl = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={BasicFloatingInputControlTitle} span={basicFloatingInputControlSubTitle} />
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <CardBody className="custom-input">
                        <Row>
                            <BasicFloatingInputBody />
                        </Row>
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}
export default BasicFloatingInputControl;