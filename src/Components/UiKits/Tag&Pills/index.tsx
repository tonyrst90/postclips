'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BadgesContextual from './BadgesContextual'
import PillsContextual from './PillsContextual'
import NumberBadges from './NumberBadges'
import NumberPills from './NumberPills'
import BadgeWithIcon from './BadgeWithIcon'
import RoundedPillsIcon from './RoundedPillsIcon'
import BadgeHeading from './BadgeHeading'
import BadgeButton from './BadgeButton'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { TagPillsTitle, UiKitsTitle } from '@/Constant'

const TagAndPillsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TagPillsTitle} parent={UiKitsTitle} title={TagPillsTitle} />
            <Container fluid>
                <Row>
                    <BadgesContextual />
                    <PillsContextual />
                    <NumberBadges />
                    <NumberPills />
                    <BadgeWithIcon />
                    <RoundedPillsIcon />
                    <BadgeHeading />
                    <BadgeButton />
                </Row>
            </Container>
        </>
    )
}
export default TagAndPillsContainer;