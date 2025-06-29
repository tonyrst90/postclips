'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import CustomWizard from './CustomWizard'
import BusinessWizard from './BusinessWizard'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { BusinessVerticalTitle, BusinessWizardTitle, CustomHorizontalTitle, CustomVerticalTitle, FormLayoutTitle, StepFormWizardTitle } from '@/Constant'

const FormWizard2Container = () => {
    return (
        <>
            <Breadcrumbs mainTitle={StepFormWizardTitle} parent={FormLayoutTitle} title={StepFormWizardTitle} />
            <Container fluid>
                <Row>
                    <CustomWizard title={CustomHorizontalTitle} navColClass='col-12' tabColClass='col-12' />
                    <BusinessWizard title={BusinessVerticalTitle} divClass='vertical-options' navColClass='col-xl-3' tabColClass='col-xl-9' />
                    <CustomWizard differentId title={CustomVerticalTitle} divClass='vertical-options' navColClass='col-md-3' tabColClass='col-md-9' />
                    <BusinessWizard title={BusinessWizardTitle} navColClass='col-12' tabColClass='col-12' />
                </Row>
            </Container>
        </>
    )
}
export default FormWizard2Container