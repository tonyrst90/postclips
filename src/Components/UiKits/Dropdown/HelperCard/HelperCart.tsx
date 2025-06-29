import { HelperCards, LearnMore } from '@/Constant';
import { useState } from 'react';
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const HelperCart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="secondary" className="text-white">{HelperCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <li>
            <h6 className="fs-6 fw-bold pb-2">{LearnMore}</h6>
            <DropdownItem className="p-0 helper-truncate pt-1">There is a lot of information available here</DropdownItem>
          </li>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}
export default HelperCart