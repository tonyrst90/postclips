import { AdditionalOptionText, Href, InventoryText, ShippingText } from '@/Constant';
import { ActiveCallbackProp } from '@/Types/ECommerce.type';
import React, { useCallback, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Inventory from './Inventory';
import AdditionalOptions from './AdditionalOptions';
import Shipping from './Shipping';

const AdvanceSection: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [borderTab, setBorderTab] = useState(1)
    const activeBorder = useCallback((val: number) => {
        setBorderTab(val);
    }, []);

    return (
        <div className="sidebar-body advance-options">
            <Nav className="border-tab mb-0" tabs>
                <NavItem>
                    <NavLink className={`${borderTab === 1 ? "active" : ''}`} href={Href} onClick={() => setBorderTab(1)}>{InventoryText}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${borderTab === 2 ? "active" : ''}`} href={Href} onClick={() => setBorderTab(2)}>{AdditionalOptionText}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${borderTab === 3 ? "active" : ''}`} href={Href} onClick={() => setBorderTab(3)}>{ShippingText}</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={borderTab}>
                <TabPane tabId={1}>
                    <Inventory activeBorder={activeBorder} activeCallBack={activeCallBack} />
                </TabPane>
                <TabPane tabId={2}>
                    <AdditionalOptions activeBorder={activeBorder} />
                </TabPane>
                <TabPane tabId={3}>
                    <Shipping activeBorder={activeBorder} />
                </TabPane>
            </TabContent>
        </div>
    )
}
export default AdvanceSection