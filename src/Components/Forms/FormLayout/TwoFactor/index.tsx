'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import TwoFactorAuthentication from './TwoFactorAuthentication'
import EmailVerification from './EmailVerification'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { FormLayoutTitle, TwoFactorTitle } from '@/Constant'

const TwoFactorContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TwoFactorTitle} parent={FormLayoutTitle} title={TwoFactorTitle} />
            <Container fluid>
                <Row>
                    <TwoFactorAuthentication />
                    <EmailVerification />
                </Row>
            </Container>
        </>
    )
}
export default TwoFactorContainer;