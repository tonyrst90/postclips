'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { EmailApplicationTitle, EmailTitle } from '@/Constant';
import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import MailSidebar from '../Common/MailSidebar';
import EmailApplicationContain from './EmailApplicationContain';

const EmailApplicationContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={EmailApplicationTitle} parent={EmailTitle} title={EmailApplicationTitle} />
            <Container fluid>
                <div className="email-wrap">
                    <Row>
                        <Col xl={3} className="box-col-30">
                            <MailSidebar />
                        </Col>
                        <Col xl={9} className="box-col-80">
                            <EmailApplicationContain />
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default EmailApplicationContainer;