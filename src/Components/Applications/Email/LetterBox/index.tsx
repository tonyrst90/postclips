'use client'
import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import LetterLeftAside from './LetterLeftAside';
import LetterRightAside from './LetterRightAside';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { EmailTitle, LetterBoxTitle } from '@/Constant';

const LetterBoxContainer = () => {
    const [navId, setNavId] = useState("1");

    return (
        <>
            <Breadcrumbs mainTitle={LetterBoxTitle} parent={EmailTitle} title={LetterBoxTitle} />
            <Container fluid>
                <div className="email-wrap email-main-wrapper">
                    <Row>
                        <LetterLeftAside navId={navId} setNavId={setNavId} />
                        <LetterRightAside navId={navId} />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default LetterBoxContainer;