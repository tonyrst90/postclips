import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import NavTabs from './NavTabs';
import { BookmarkFilter, ImagePath } from '@/Constant';
import Image from 'next/image';

const LeftAsideBookmark = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); };
    return (
        <Col xl={3} className="box-col-3">
            <div className="md-sidebar">
                <Button color='primary' className="md-sidebar-toggle" onClick={toggle}>{BookmarkFilter}</Button>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <div className="d-flex align-items-center">
                                        <div className="media-size-email">
                                            <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} width={48} height={48} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h3>{'MARK JENCO'}</h3>
                                            <p>{'Markjecno@gmail.com'}</p>
                                        </div>
                                    </div>
                                    <NavTabs />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default LeftAsideBookmark;