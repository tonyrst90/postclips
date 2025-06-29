import { CommonDropdownProp } from '@/Types/UiKits.type';
import React, { Fragment, useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const CommonDropDown: React.FC<CommonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} >
        <DropdownToggle caret color={item.btnColor} className={`${item.btnColor === "warning" ? "text-dark" : "text-white"} ${item.toggleClassName}`} size={item.size}>
          {item.btnText}
        </DropdownToggle>
        <DropdownMenu className={item.dropClassName}>
          {item.items.map((dropdownItem, index) => (
            <Fragment key={index}>
              {dropdownItem.item ? <DropdownItem>{dropdownItem.item}</DropdownItem> : ""}
              {dropdownItem.divider ? <DropdownItem divider /> : ""}
            </Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>

  )
}
export default CommonDropDown