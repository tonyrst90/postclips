'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { Accordion, UiKitsTitle } from '@/Constant'
import { Container, Row } from 'reactstrap'
import SimpleAccordion from './SimpleAccordion/SimpleAccordion'
import FlushAccordion from './FlushAccordion/FlushAccordion'
import MultipleCollapseAccordion from './MultipleCollapseAccordion/MultipleCollapseAccordion'
import WithIconsAccordion from './WithIconsAccordion/WithIconsAccordion'
import OutlineAccordion from './OutlineAccordion/OutlineAccordion'
import HorizontalAccordion from './HorizontalAccordion/HorizontalAccordion'
import CollapseAccordion from './CollapseAccordion/CollapseAccordion'

const AccordionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Accordion} parent={UiKitsTitle} title={Accordion} />
      <Container fluid>
        <Row>
          <SimpleAccordion />
          <FlushAccordion />
          <MultipleCollapseAccordion />
          <WithIconsAccordion />
          <OutlineAccordion />
          <HorizontalAccordion />
          <CollapseAccordion />
        </Row>
      </Container>
    </>
  )
}
export default AccordionContainer