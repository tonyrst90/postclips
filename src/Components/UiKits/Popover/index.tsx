'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicPopover from './BasicPopover'
import PopoverDirection from './PopoverDirection'
import PopoverOffset from './PopoverOffset'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { PopoverTitle, UiKitsTitle } from '@/Constant'

const PopoverContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={PopoverTitle} parent={UiKitsTitle} title={PopoverTitle} />
            <Container fluid>
                <Row className="popover-main">
                    <BasicPopover />
                    <PopoverDirection />
                    <PopoverOffset />
                </Row>
            </Container>
        </>
    )
}
export default PopoverContainer;