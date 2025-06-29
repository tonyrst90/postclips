'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicModal from './BasicModal'
import SizeModal from './SizeModal'
import FullscreenModal from './FullscreenModal'
import CenteredModal from './CenteredModal'
import ToggleModal from './ToggleModal'
import StaticModal from './StaticModal'
import CustomModals from './CustomModals'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { ModalTitle, UiKitsTitle } from '@/Constant'

const ModalContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ModalTitle} parent={UiKitsTitle} title={ModalTitle} />
      <Container fluid>
        <Row>
          <BasicModal />
          <SizeModal />
          <FullscreenModal />
          <CenteredModal />
          <ToggleModal />
          <StaticModal />
          <CustomModals />
        </Row>
      </Container>
    </>
  )
}
export default ModalContainer;