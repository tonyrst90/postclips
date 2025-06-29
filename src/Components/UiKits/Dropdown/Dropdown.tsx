'use client'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { DropdownTitle, UiKitsTitle } from '@/Constant'
import { Container, Row } from 'reactstrap'
import BasicDropdown from './BasicDropdown/BasicDropdown'
import RoundedDropdown from './RoundedDropdown/RoundedDropdown'
import SplitDropdown from './SplitDropdown/SplitDropdown'
import HeadingDropdown from './HeadingDropdown/HeadingDropdown'
import WithInputType from './WithInputType/WithInputType'
import DarkDropdown from './DarkDropdown/DarkDropdown'
import UniqueDropdown from './UniqueDropdown/UniqueDropdown'
import JustifyContents from './JustifyContents/JustifyContents'
import Alignments from './Alignments/Alignments'
import HelperCard from './HelperCard/HelperCard'
import DividerDropdown from './DividerDropdown/DividerDropdown'
import DropdownSizing from './DropdownSizing/DropdownSizing'

const DropdownContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DropdownTitle} parent={UiKitsTitle} title={DropdownTitle} />
      <Container fluid>
        <Row className='dropdown-page'>
          <BasicDropdown />
          <RoundedDropdown />
          <SplitDropdown />
          <HeadingDropdown />
          <WithInputType />
          <DarkDropdown />
          <UniqueDropdown />
          <JustifyContents />
          <Alignments />
          <HelperCard />
          <DividerDropdown />
          <DropdownSizing />
        </Row>
      </Container>
    </>
  )
}

export default DropdownContainer