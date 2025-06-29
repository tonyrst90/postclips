'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FormControlsTitle, InputMaskTitle } from '@/Constant'
import { inputMasksSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'
import DefaultInputMask from './DefaultInputMask'

const InputMaskContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={InputMaskTitle} parent={FormControlsTitle} title={InputMaskTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={InputMaskTitle} span={inputMasksSubTitle} />
                            <CardBody className='input-mask'>
                                <Row className='g-3'>
                                    <DateFormat />
                                    <TimeFormat />
                                    <DefaultInputMask />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default InputMaskContainer