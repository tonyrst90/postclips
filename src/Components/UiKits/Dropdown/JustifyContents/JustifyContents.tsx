import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { JustifyContent, TextLeft } from '@/Constant';
import { justifyData, justifyList } from '@/Data/UiKits/Dropdown';
import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonDropDown from '../Common/CommonDropDown';

const JustifyContents = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <Col lg={6}>
      <Card className="custom-with-input">
        <CommonCardHeader title={JustifyContent} span={justifyData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary" className="text-white">{TextLeft}</DropdownToggle>
                <DropdownMenu className="dropdown-block text-start">
                  <DropdownItem>Hello..</DropdownItem>
                  <DropdownItem>How are you?</DropdownItem>
                  <DropdownItem>What are you doing?</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {justifyList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default JustifyContents