'use client'
import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import SocialHeader from './SocialHeader'
import SocialTabContents from './SocialTabContents';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { ApplicationsTitle, SocialAppTitle } from '@/Constant';

const SocialAppContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs mainTitle={SocialAppTitle} parent={ApplicationsTitle} title={SocialAppTitle} />
            <Container fluid>
                <div className="user-profile social-app-profile">
                    <Row>
                        <SocialHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Row>
                    <SocialTabContents activeTab={activeTab} />
                </div>
            </Container>
        </>
    )
}
export default SocialAppContainer