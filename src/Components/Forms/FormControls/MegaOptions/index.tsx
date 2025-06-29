'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import VariationRadio from './VariationRadio'
import VariationCheckbox from './VariationCheckbox'
import DefaultStyle from './DefaultStyle'
import WithoutBordersStyle from './WithoutBordersStyle'
import SolidBorderStyle from './SolidBorderStyle'
import OfferStyleBorder from './OfferStyleBorder'
import InlineStyle from './InlineStyle'
import VerticalStyle from './VerticalStyle'
import HorizontalStyle from './HorizontalStyle'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { FormControlsTitle, MegaOptionsTitle } from '@/Constant'

const MegaOptionsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MegaOptionsTitle} parent={FormControlsTitle} title={MegaOptionsTitle} />
      <Container fluid>
        <Row>
          <VariationRadio />
          <VariationCheckbox />
          <DefaultStyle />
          <WithoutBordersStyle />
          <SolidBorderStyle />
          <OfferStyleBorder />
          <InlineStyle />
          <VerticalStyle />
          <HorizontalStyle />
        </Row>
      </Container>
    </>
  )
}
export default MegaOptionsContainer