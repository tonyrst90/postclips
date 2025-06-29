import { Href } from "@/Constant";
import { DashBoardCommonDropdown } from "@/Types/Dashboard.type";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const CommonDropdown: React.FC<DashBoardCommonDropdown> = ({ days }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown className="icon-dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="transparent"><i className="icon-more-alt" /></DropdownToggle>
      <DropdownMenu end>
        <DropdownItem href={Href}>{days ? "Today" : "Weekly"}</DropdownItem>
        <DropdownItem href={Href}>{days ? "Tomorrow" : "Monthly"}</DropdownItem>
        <DropdownItem href={Href}>{days ? "Yesterday" : "Yearly"}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};