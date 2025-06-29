'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultTouchspin from './DefaultTouchspin'
import OutlinedTouchspin from './OutlinedTouchspin'
import IconsWithPrefixAndPostfix from './IconsWithPrefixAndPostfix'
import ButtonsWithPrefixPostfix from './ButtonsWithPrefixPostfix'
import RoundedTouchspin from './RoundedTouchspin'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { FormWidgetsTitle, TouchspinTitle } from '@/Constant'

const TouchspinContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TouchspinTitle} parent={FormWidgetsTitle} title={TouchspinTitle} />
            <Container fluid>
                <div className="bootstrap-touchspin">
                    <Row>
                        <DefaultTouchspin />
                        <OutlinedTouchspin />
                        <IconsWithPrefixAndPostfix />
                        <ButtonsWithPrefixPostfix />
                        <RoundedTouchspin />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default TouchspinContainer;