'use client'
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import SearchNav from './SearchNav';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { SearchPagesTitle, SearchWebsiteTitle } from '@/Constant';
import SearchTabContent from './SearchTabContent';
import SearchResultHeader from './SearchResultHeader';

const SearchResultContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Breadcrumbs mainTitle={SearchWebsiteTitle} parent={SearchPagesTitle} title={SearchWebsiteTitle} />
            <Container className='search-page' fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <SearchResultHeader />
                            <CardBody>
                                <SearchNav activeTab={activeTab} setActiveTab={setActiveTab} />
                                <SearchTabContent activeTab={activeTab} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SearchResultContainer