import { Href, ImagePath } from '@/Constant'
import { SocialHeaderType } from '@/Types/SocialApp.type'
import Image from 'next/image'
import React from 'react'
import { Card, Col, Nav, NavItem, NavLink } from 'reactstrap'
import ShareIcons from './ShareIcons'

const SocialHeader: React.FC<SocialHeaderType> = ({ activeTab, setActiveTab }) => {
    return (
        <Col sm={12} className="box-col-12">
            <Card className="hovercard text-center">
                <div className="cardheader socialheader" />
                <div className="user-image">
                    <div className="avatar"><Image alt="" src={`${ImagePath}/user/1.jpg`} width={86} height={86} /></div>
                    <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5" /></div>
                    <ShareIcons />
                </div>
                <div className="info market-tabs p-0">
                    <Nav className="border-tab tabs-scoial" tabs>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>{'Timeline'}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>{'About'}</NavLink>
                        </NavItem>
                        <NavItem>
                            <div className="user-designation" />
                            <div className="title"><a href={Href}>{'ElANA'}</a></div>
                            <div className="desc mt-2">{'general manager'}</div>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>{'Friends'}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === 4 ? 'active' : ''} onClick={() => setActiveTab(4)}>{'Photos'}</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Card>
        </Col>
    )
}
export default SocialHeader