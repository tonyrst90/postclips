'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonTableComponent from './Common/CommonTableComponent'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { AlertTitle, BadgesTitle, CheckboxTitle, Input, ProgressbarTitle, RadioButtonsTitle, ReactstrapTablesTitle, Select, SwitchTitle, TableComponentsTitle, TooltipTriggersTitle, UIComponentsTitle } from '@/Constant'
import { alertTableData, badgesTableData, checkboxTableData, inputTableData, progressTableData, radioBoxTableData, selectBoxTableData, switchTableData, toolTipTriggersData, uiComponentTableData } from '@/Data/Tables/ReactstrapTables/TableComponents'

const TableComponentsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TableComponentsTitle} parent={ReactstrapTablesTitle} title={TableComponentsTitle} />
            <Container fluid>
                <Row>
                    <CommonTableComponent title={UIComponentsTitle} data={uiComponentTableData} />
                    <CommonTableComponent title={AlertTitle} data={alertTableData} />
                    <CommonTableComponent title={ProgressbarTitle} data={progressTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={CheckboxTitle} data={checkboxTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={RadioButtonsTitle} data={radioBoxTableData} tableClass='radio-first-col-width' />
                    <CommonTableComponent title={Select} data={selectBoxTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={Input} data={inputTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={BadgesTitle} data={badgesTableData} />
                    <CommonTableComponent title={TooltipTriggersTitle} data={toolTipTriggersData} />
                    <CommonTableComponent title={SwitchTitle} data={switchTableData} />
                </Row>
            </Container>
        </>
    )
}
export default TableComponentsContainer