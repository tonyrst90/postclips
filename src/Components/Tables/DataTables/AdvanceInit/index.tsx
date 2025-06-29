'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import StockResult from './StockResult'
import RowCreateCallback from './RowCreateCallback'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { AdvanceInitTitle, DataTablesTitle } from '@/Constant'

const AdvanceInitContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={AdvanceInitTitle} parent={DataTablesTitle} title={AdvanceInitTitle} />
            <Container fluid>
                <Row>
                    <StockResult />
                    <RowCreateCallback />
                </Row>
            </Container>
        </>
    )
}
export default AdvanceInitContainer;