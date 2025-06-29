import React, { useState } from 'react'
import { FormGroup, Input, Label, Nav, NavItem, NavLink } from 'reactstrap';
import MailBody from './MailBody';
import { emailNavTab } from '@/Data/Applications/Email';
import { Href } from '@/Constant';
import SVG from '@/CommonComponent/SVG';

const MailHeader = () => {
    const [navId, setNavId] = useState("pills-important-tab")
    return (
        <div className="mail-header-wrapper">
            <div className="mail-header">
                <FormGroup check inline>
                    <Input className="checkbox-primary" id="emailCheckboxA" type="checkbox" value="option1" />
                    <Label htmlFor="emailCheckboxA" check />
                    <Nav className="email-tabs">
                        {emailNavTab.map((data) => (
                            <NavItem key={data.id}>
                                <NavLink href={Href} className={navId === data.id ? 'active' : ''} onClick={() => setNavId(data.id)}>
                                    <SVG className='stroke-icon' iconId={data.icon} />
                                    <span>{data.title}</span>
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </FormGroup>
            </div>
            <MailBody />
        </div>
    )
}
export default MailHeader;