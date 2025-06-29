import React, { useState } from 'react'
import { Badge, Button, Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { LetterBoxNavType } from '@/Types/Email.type';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { AddLabel, ComposeEmail, EmailFilter, Href } from '@/Constant';
import { setComposeEmail, setModal } from '@/Redux/Reducers/LetterBoxSlice';
import { letterBoxSidebar } from '@/Data/Applications/Email';
import SVG from '@/CommonComponent/SVG';

const LetterLeftAside: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
    const dispatch = useAppDispatch()
    const { composeEmail, inboxEmail, modal } = useAppSelector((state) => state.letterbox);
    let starBadges = inboxEmail.filter((data) => data.star === true && 1)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col xxl={3} xl={4} className="box-col-12">
            <div className="md-sidebar">
                <Button color='primary' className="md-sidebar-toggle" onClick={toggle}>{EmailFilter}</Button>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar">
                                    <Button color='primary' className="emailbox" onClick={() => dispatch(setComposeEmail(!composeEmail))}>
                                        <i className="fa fa-plus" />{ComposeEmail}
                                    </Button>
                                    <Nav className="main-menu email-category" pills>
                                        {letterBoxSidebar.map((data) => (
                                            <NavItem key={data.id}>
                                                <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={() => setNavId(data.id)} href={Href}>
                                                    <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
                                                    <div>
                                                        {data.title}
                                                        {data.badge && <Badge color='transparent'>{data.title === 'Inbox' ? inboxEmail.length : starBadges.length}</Badge>}
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        ))}
                                        <NavItem>
                                            <NavLink className="btn" href={Href} onClick={() => dispatch(setModal(!modal))}>
                                                <i className="fa fa-plus" />{AddLabel}
                                            </NavLink>
                                        </NavItem>
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
export default LetterLeftAside;