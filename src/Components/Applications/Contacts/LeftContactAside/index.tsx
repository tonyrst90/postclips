import { ContactFilter, Href } from '@/Constant';
import { LeftContactAsideProps } from '@/Types/Contact.type';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Nav, NavItem } from 'reactstrap';
import ProfileHeader from './Common/ProfileHeader';
import AddContact from './ContactModals/AddContact';
import CategoryModal from './ContactModals/CategoryModal';
import { contactNavData } from '@/Data/Applications/Contacts';

const LeftContactAside: React.FC<LeftContactAsideProps> = ({ activeTab, setActiveTab, changeTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen);};
    const tabClick = (id: number) => {
        setActiveTab(id);
        changeTab(id);
    }
    return (
        <Col xl={3} className="box-col-3">
            <div className="md-sidebar">
                <Button color='primary' className="md-sidebar-toggle" onClick={toggle}>{ContactFilter}</Button>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <ProfileHeader />
                                    <Nav className="main-menu contact-options">
                                        <NavItem><AddContact /></NavItem>
                                        <NavItem><span className="main-title">{'Views'}</span></NavItem>
                                        <NavItem><a href={Href} className={activeTab === 1 ? 'active' : ''} onClick={() => tabClick(1)}><span className="title">{'Personal'}</span></a></NavItem>
                                        <NavItem><CategoryModal /></NavItem>
                                        {contactNavData.map((item) => (
                                            <NavItem key={item.id}>
                                                <a href={Href} className={activeTab === item.id ? 'active' : ''} onClick={() => tabClick(item.id)}>
                                                    <span className="title">{item.title}</span>
                                                </a>
                                            </NavItem>
                                        ))}
                                    </Nav>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default LeftContactAside;