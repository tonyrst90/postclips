import { Href } from '@/Constant';
import { mailBodyItems } from '@/Data/Applications/Email';
import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from 'reactstrap';

const MailBody = () => {
    const [openDrop, setOpenDrop] = useState(false);
    const toggle = () => {
        setOpenDrop(!openDrop);
    };
    return (
        <div className="mail-body">
            <div className="mail-search d-flex-align-items-center">
                <Input type="text" placeholder="Search..." /><i className="fa fa-search" />
            </div>
            <div className="light-square"><i className="fa fa-refresh" /></div>
            <div className="light-square"><i className="fa fa-trash" /></div>
            <Dropdown isOpen={openDrop} toggle={toggle}>
                <DropdownToggle color="transparent" dir="left" className="light-square"><i className="fa fa-ellipsis-v" /></DropdownToggle>
                <DropdownMenu className="dropdown-block" end={true}>
                    {mailBodyItems.map((item, index) => (
                        <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default MailBody;