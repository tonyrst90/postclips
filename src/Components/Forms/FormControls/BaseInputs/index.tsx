'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicForm from './BasicForm'
import FloatingForm from './FloatingForm'
import SelectSizing from './SelectSizing'
import FormControlSizing from './FormControlSizing'
import FileInput from './FileInput'
import FlatInputStyle from './FlatInputStyle'
import BasicHtmlInputControl from './BasicHtmlInputControl'
import BasicFloatingInputControl from './BasicFloatingInputControl'
import EdgesInputStyle from './EdgesInputStyle'
import RaiseInputStyle from './RaiseInputStyle'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { BaseInputsTitle, FormControlsTitle } from '@/Constant'

const BaseInputsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={BaseInputsTitle} parent={FormControlsTitle} title={BaseInputsTitle} />
            <Container fluid>
                <Row>
                    <BasicForm />
                    <FloatingForm />
                    <SelectSizing />
                    <FormControlSizing />
                    <FileInput />
                    <FlatInputStyle />
                    <BasicHtmlInputControl />
                    <BasicFloatingInputControl />
                    <EdgesInputStyle />
                    <RaiseInputStyle />
                </Row>
            </Container>
        </>
    )
}
export default BaseInputsContainer;