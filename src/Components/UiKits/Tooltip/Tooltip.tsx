'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { Tooltip, UiKitsTitle } from '@/Constant'
import { Container, Row } from 'reactstrap'
import BasicTooltips from './BasicTooltips/BasicTooltips'
import ColoredTooltip from './ColoredTooltip/ColoredTooltip'
import TooltipDirections from './TooltipDirections/TooltipDirections'
import ElementsWithHoverEffect from './ElementsWithHoverEffect/ElementsWithHoverEffect'
import FilledTooltip from './FilledTooltip/FilledTooltip'

const TooltipContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Tooltip} parent={UiKitsTitle} title={Tooltip} />
      <Container fluid>
        <Row>
          <BasicTooltips />
          <ColoredTooltip />
          <TooltipDirections />
          <ElementsWithHoverEffect />
          <FilledTooltip />
        </Row>
      </Container>
    </>
  )
}

export default TooltipContainer