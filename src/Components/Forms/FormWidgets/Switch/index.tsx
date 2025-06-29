'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import CustomSwitch from './CustomSwitch'
import IconUncheckedBorderSwitch from './IconUncheckedBorderSwitch'
import DisabledOutlineSwitch from './DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches'
import SwitchSizingIcons from './SwitchSizingIcons'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { FormWidgetsTitle, SwitchTitle } from '@/Constant'

const SwitchContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SwitchTitle} parent={FormWidgetsTitle} title={SwitchTitle} />
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconUncheckedBorderSwitch />
          <DisabledOutlineSwitch />
          <VariationOfSwitches />
          <SwitchSizingIcons />
        </Row>
      </Container>
    </>
  )
}
export default SwitchContainer;