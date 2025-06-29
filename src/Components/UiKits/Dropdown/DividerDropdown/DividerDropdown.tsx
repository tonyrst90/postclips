import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DividerDropdowns, Wishlist } from '@/Constant';
import { dividerData, dividerSortData } from '@/Data/UiKits/Dropdown';
import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonDropDown from '../Common/CommonDropDown';

const DividerDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={DividerDropdowns} span={dividerData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Wishlist}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Shoes</DropdownItem>
                  <DropdownItem>Bag</DropdownItem>
                  <DropdownItem>Clothes</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Separated link</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {dividerSortData.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default DividerDropdown