import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BasicDropdowns, DashboardTitle } from '@/Constant';
import { dropDownData, dropDownList } from '@/Data/UiKits/Dropdown';
import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonDropDown from '../Common/CommonDropDown';

const BasicDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={BasicDropdowns} span={dropDownData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary">{DashboardTitle}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Project</DropdownItem>
                  <DropdownItem>Ecommerce</DropdownItem>
                  <DropdownItem>Crypto</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {dropDownList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicDropdown