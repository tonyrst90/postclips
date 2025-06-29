import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HeadingDropdowns, Party } from '@/Constant';
import { headingData } from '@/Data/UiKits/Dropdown';
import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const HeadingDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonCardHeader title={HeadingDropdowns} span={headingData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Party}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem header className="fw-bold fs-6">Party List</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Balloons</DropdownItem>
                  <DropdownItem>Cake</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default HeadingDropdown