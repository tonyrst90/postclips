'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import SocialProfileCards from './SocialProfileCards'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { UserCardsTitle, UsersTitle } from '@/Constant'

const UserCardsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={UserCardsTitle} parent={UsersTitle} title={UserCardsTitle} />
            <Container fluid>
                <Row>
                    <SocialProfileCards />
                </Row>
            </Container>
        </>
    )
}
export default UserCardsContainer;