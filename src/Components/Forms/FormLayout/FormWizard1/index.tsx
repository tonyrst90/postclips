'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import NumberingWizard from './NumberingWizard'
import StudentValidationForm from './StudentValidationForm'
import VerticalValidationWizard from './VerticalValidationWizard'
import ShippingForm from './ShippingForm'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { FormLayoutTitle, FormWizardTitle } from '@/Constant'

const FormWizard1Container = () => {
    return (
        <>
            <Breadcrumbs mainTitle={FormWizardTitle} parent={FormLayoutTitle} title={FormWizardTitle} />
            <Container fluid>
                <Row>
                    <NumberingWizard />
                    <StudentValidationForm />
                    <VerticalValidationWizard />
                    <ShippingForm />
                </Row>
            </Container>
        </>
    )
}
export default FormWizard1Container