import { Href } from '@/Constant';
import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const RightIconDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="card-header-right-icon">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="transparent">{'Today'}</DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem href={Href}>{"Today"}</DropdownItem>
                    <DropdownItem href={Href}>{"Tomorrow"}</DropdownItem>
                    <DropdownItem href={Href}>{"Yesterday"}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default RightIconDropdown;