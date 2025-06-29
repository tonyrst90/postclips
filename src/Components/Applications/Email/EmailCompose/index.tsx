'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { EmailComposeTitle, EmailTitle } from '@/Constant';
import exp from 'constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import MailSidebar from '../Common/MailSidebar';
import EmailComposeContain from './EmailComposeContain';

const EmailComposeContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={EmailComposeTitle} parent={EmailTitle} title={EmailComposeTitle} />
            <Container fluid>
                <div className="email-wrap">
                    <Row>
                        <Col xl={3} className="box-col-3">
                            <MailSidebar />
                        </Col>
                        <Col xl={9} className="box-col-80">
                            <EmailComposeContain />
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default EmailComposeContainer;