import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import LeftContactAside from './LeftContactAside';
import RightContactAside from './RightContactAside';
import { useAppDispatch } from '@/Redux/Hooks';
import { fetchContactApiData } from '@/Redux/Reducers/ContactSlice';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { ApplicationsTitle, ContactsTitle } from '@/Constant';

const ContactsContainer = () => {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState(1);
    const changeTab = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);
    useEffect(() => {
        dispatch(fetchContactApiData());
    }, []);
    return (
        <>
            <Breadcrumbs title={ContactsTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <LeftContactAside activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
                        <RightContactAside activeTab={activeTab} />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default ContactsContainer;