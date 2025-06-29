import { AlertCards, Danger } from '@/Constant';
import { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const AlertCard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="info" className="text-white">{AlertCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <li>
            <h6 className="fs-6 fw-bold pb-2">{Danger}</h6>
            <DropdownItem className="p-0 helper-truncate pt-1">It's a danger path.</DropdownItem>
          </li>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default AlertCard