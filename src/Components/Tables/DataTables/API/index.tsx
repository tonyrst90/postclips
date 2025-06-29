'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import AddRows from './AddRows'
import ChildRows from './ChildRows'
import RowSelectionAndDeletion from './RowSelectionAndDeletion'
import CustomFiltering from './CustomFiltering'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { APIDataTablesTitle, DataTablesTitle } from '@/Constant'

const APIContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={APIDataTablesTitle} parent={DataTablesTitle} title={APIDataTablesTitle} />
            <Container fluid>
                <Row>
                    <AddRows />
                    <ChildRows />
                    <RowSelectionAndDeletion />
                    <CustomFiltering />
                </Row>
            </Container>
        </>
    )
}
export default APIContainer;