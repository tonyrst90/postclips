import SVG from '@/CommonComponent/SVG';
import { Href } from '@/Constant';
import { MailPropsType } from '@/Types/Email.type';
import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const InboxOptions: React.FC<MailPropsType> = ({ handlePrint }) => {
    const [fill, setFill] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="inbox-options">
            <span>{'Friday 07 Apr (4 hours ago)'}</span>
            <div className="light-square" onClick={() => setFill(!fill)}>
                <SVG className={`important-mail ${fill ? "active" : ""}`} iconId='mail-star' />
            </div>
            <div className="light-square" onClick={handlePrint}>
                <SVG iconId='print' />
            </div>
            <ButtonGroup className="light-square">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle color="transparent" dir="left"><SVG iconId='menubar' /></DropdownToggle>
                    <DropdownMenu className="dropdown-block">
                        <DropdownItem href={Href}><i className="fa fa-mail-reply" />{'Reply'}</DropdownItem>
                        <DropdownItem href={Href}><i className="fa fa-mail-forward" />{'Forward'}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        </div>
    )
}
export default InboxOptions;