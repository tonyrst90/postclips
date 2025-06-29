'use client'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { Tabs, UiKitsTitle } from '@/Constant'
import JustifyTabs from './JustifyTabs/JustifyTabs'
import MaterialStyleLeftTabs from './MaterialStyleLeftTabs/MaterialStyleLeftTabs'
import MaterialStyleTabs from './MaterialStyleTabs/MaterialStyleTabs'
import BorderTabs from './BorderTabs/BorderTabs'
import SimpleTabs from './SimpleTabs/SimpleTabs'
import IconsWithTabs from './IconsWithTabs/IconsWithTabs'
import VerticalTabs from './VerticalTabs/VerticalTabs'
import PillsTabs from './PillsTabs/PillsTabs'

const ReactstrapTabsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Tabs} parent={UiKitsTitle} title={Tabs} />
      <Container fluid>
        <Row>
          <SimpleTabs />
          <IconsWithTabs />
          <VerticalTabs />
          <PillsTabs />
          <JustifyTabs />
          <MaterialStyleLeftTabs />
          <MaterialStyleTabs />
          <BorderTabs />
        </Row>
      </Container>
    </>
  )
}

export default ReactstrapTabsContainer