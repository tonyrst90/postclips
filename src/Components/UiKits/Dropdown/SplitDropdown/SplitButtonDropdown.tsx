import React, { useState } from 'react'
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Href } from '@/Constant';
import { SplitButtonDropdownProp } from '@/Types/UiKits.type';

const SplitButtonDropdown: React.FC<SplitButtonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Button outline color={item.btnColor}>{item.btnText}</Button>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
        <DropdownToggle color={item.btnColor}>
          <i className="icofont icofont-arrow-down"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-content">
          {item.items.map((data, index) => (
            <DropdownItem href={Href} key={index}>{data.item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default SplitButtonDropdown;