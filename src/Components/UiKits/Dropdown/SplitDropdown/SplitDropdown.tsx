import { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, SplitDropdowns, Widgets } from '@/Constant';
import { splitData, splitList } from '@/Data/UiKits/Dropdown';
import SplitButtonDropdown from './SplitButtonDropdown';

const SplitDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonCardHeader title={SplitDropdowns} span={splitData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Button color="primary" outline>{Widgets}</Button>
              <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
                <DropdownToggle color="primary">
                  <i className="icofont icofont-arrow-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-content">
                  <DropdownItem href={Href}>{'General'}</DropdownItem>
                  <DropdownItem href={Href}>{'Chart'}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {splitList.map((data, index) => (
              <SplitButtonDropdown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default SplitDropdown