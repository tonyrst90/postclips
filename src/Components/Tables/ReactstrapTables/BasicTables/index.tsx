'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicTableWithBorder from './BasicTableWithBorder'
import InverseTable from './InverseTable'
import HoverableRows from './HoverableRows'
import InverseTablePrimary from './InverseTablePrimary'
import CaptionTable from './CaptionTable'
import StripedRowInverseTable from './StripedRowInverseTable'
import BreckpointSpecific from './BreckpointSpecific'
import ResponsiveLightBackground from './ResponsiveLightBackground'
import SizingTables from './SizingTables'
import CustomColorHoverStripped from './CustomColorHoverStripped'
import DashedBorder from './DashedBorder'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { ReactstrapBasicTablesTitle, ReactstrapTablesTitle } from '@/Constant'
import TableHeadOptions from './TableHeadOptions'

const BasicTablesContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ReactstrapBasicTablesTitle} parent={ReactstrapTablesTitle} title={ReactstrapBasicTablesTitle} />
            <Container className='basic_table' fluid>
                <Row>
                    <BasicTableWithBorder />
                    <InverseTable />
                    <HoverableRows />
                    <InverseTablePrimary />
                    <CaptionTable />
                    <TableHeadOptions />
                    <StripedRowInverseTable />
                    <BreckpointSpecific />
                    <ResponsiveLightBackground />
                    <SizingTables />
                    <CustomColorHoverStripped />
                    <DashedBorder />
                </Row>
            </Container>
        </>
    )
}
export default BasicTablesContainer;