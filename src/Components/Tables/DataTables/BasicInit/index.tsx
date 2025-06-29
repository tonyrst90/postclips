'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import ZeroConfigurationTable from './ZeroConfigurationTable'
import StateSavingTable from './StateSavingTable'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { BasicDataTablesTitle, DataTablesTitle } from '@/Constant'

const BasicInitContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={BasicDataTablesTitle} parent={DataTablesTitle} title={BasicDataTablesTitle} />
            <Container fluid>
                <Row>
                    <ZeroConfigurationTable />
                    <StateSavingTable />
                    <ScrollVerticalDynamicHeight />
                </Row>
            </Container>
        </>
    )
}
export default BasicInitContainer;