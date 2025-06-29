'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import LinkDarkColor from './LinkDarkColor'
import LinkLightColor from './LinkLightColor'
import OutlineAlert from './OutlineAlert'
import AlertWithIcons from './AlertWithIcons'
import DismissingDarkAlert from './DismissingDarkAlert'
import DismissingLightAlert from './DismissingLightAlert'
import LiveAlert from './LiveAlert'
import LeftBorderAlert from './LeftBorderAlert'
import AdditionalAlert from './AdditionalAlert'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { AlertTitle, UiKitsTitle } from '@/Constant'

const AlertContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={AlertTitle} parent={UiKitsTitle} title={AlertTitle} />
            <Container fluid>
                <Row>
                    <LinkDarkColor />
                    <LinkLightColor />
                    <OutlineAlert />
                    <AlertWithIcons />
                    <DismissingDarkAlert />
                    <DismissingLightAlert />
                    <LiveAlert />
                    <LeftBorderAlert />
                    <AdditionalAlert />
                </Row>
            </Container>
        </>
    )
}
export default AlertContainer;