'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import Listing from './Listing'
import DisplayHeading from './DisplayHeading'
import InlineTextElements from './InlineTextElements'
import TextColor from './TextColor'
import BlockQuotesCard from './BlockQuotesCard'
import Headings from './Headings'
import ColoredHeadings from './ColoredHeadings'
import FontWeight from './FontWeight'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { TypographyTitle, UiKitsTitle } from '@/Constant'

const TypographyContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TypographyTitle} parent={UiKitsTitle} title={TypographyTitle} />
            <Container fluid>
                <Row>
                    <Headings />
                    <ColoredHeadings />
                    <FontWeight />
                    <Listing />
                    <DisplayHeading />
                    <InlineTextElements />
                    <TextColor />
                    <BlockQuotesCard />
                </Row>
            </Container>
        </>
    )
}
export default TypographyContainer;