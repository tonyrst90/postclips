import { Href } from '@/Constant';
import { productPageMainNav, productPageTab } from '@/Data/Applications/ECommerce/Product';
import React, { useState } from 'react'
import { Card, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

const ProductPageTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Card>
            <Row className="product-page-main">
                <Col sm={12}>
                    <Nav className="border-tab mb-0" color='primary' tabs>
                        {productPageMainNav.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink className={activeTab === index + 1 ? 'active' : ''} onClick={() => setActiveTab(index + 1)} href={Href}>{item}</NavLink>
                                <div className="material-border" />
                            </NavItem>
                        ))}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        {productPageTab.map((item) => (
                            <TabPane key={item.id} tabId={item.id}>
                                {item.paragraph.map((list, index) => (
                                    <p className={`mb-0 ${index === 0 ? "m-t-20" : ""}`} key={index}>{list}</p>
                                ))}
                            </TabPane>
                        ))}
                    </TabContent>
                </Col>
            </Row>
        </Card>
    )
}
export default ProductPageTabs;