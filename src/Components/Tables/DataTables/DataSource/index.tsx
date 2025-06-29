'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import HtmlSourcedData from './HtmlSourcedData'
import AjaxSourcedData from './AjaxSourcedData'
import JavascriptSourcedData from './JavascriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { DataSourceDataTablesTitle, DataTablesTitle } from '@/Constant'

const DataSourceContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DataSourceDataTablesTitle} parent={DataTablesTitle} title={DataSourceDataTablesTitle} />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavascriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </>
  )
}
export default DataSourceContainer;