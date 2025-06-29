import { DropdownLink, DropdownText } from "@/Constant";
import { CommonDropdownType } from "@/Types/Buttons.type";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const CommonDropdown: React.FC<CommonDropdownType> = ({ color, className }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle color={color} caret className={`text-dark ${className ? className : ""}`}>{DropdownText}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{DropdownLink}</DropdownItem>
        <DropdownItem>{DropdownLink}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};