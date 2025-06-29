'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BorderStyles from './BorderStyles'
import BordersAndDisplays from './BordersAndDisplays'
import BackgroundColors from './BackgroundColors'
import BorderColor from './BorderColor'
import ImageSize from './ImageSize'
import FontStyle from './FontStyle'
import FontWeight from './FontWeight'
import TextColors from './TextColors'
import FontSize from './FontSize'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { HelperClassesTitle, UiKitsTitle } from '@/Constant'

const HelperClassContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={HelperClassesTitle} parent={UiKitsTitle} title={HelperClassesTitle} />
            <Container fluid>
                <Row>
                    <BorderStyles />
                    <BordersAndDisplays />
                    <BackgroundColors />
                    <BorderColor />
                    <ImageSize />
                    <FontStyle />
                    <FontWeight />
                    <TextColors />
                    <FontSize />
                </Row>
            </Container>
        </>
    )
}
export default HelperClassContainer