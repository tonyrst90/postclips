'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { FormControlsTitle, ValidationFormTitle } from '@/Constant';
import React from 'react'
import { Container, Row } from 'reactstrap';
import TooltipFormValidation from './TooltipFormValidation';
import BrowserDefaults from './BrowserDefaults';
import ValidationForm from './ValidationForm';

const FormValidationContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ValidationFormTitle} parent={FormControlsTitle} title={ValidationFormTitle} />
            <Container fluid>
                <Row>
                    <TooltipFormValidation />
                    <BrowserDefaults />
                    <ValidationForm />
                </Row>
            </Container>
        </>
    )
}
export default FormValidationContainer;