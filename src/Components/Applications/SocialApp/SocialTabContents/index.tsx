import { SocialTabContentsType } from '@/Types/SocialApp.type'
import React from 'react'
import { Row, TabContent, TabPane } from 'reactstrap'
import TimelineTab from './TimelineTab'
import AboutTab from './AboutTab'
import Photos from './Photos'
import SocialProfileCards from './SocialProfileCards'

const SocialTabContents: React.FC<SocialTabContentsType> = ({ activeTab }) => {
    return (
        <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
                <TimelineTab />
            </TabPane>
            <TabPane tabId={2}>
                <AboutTab />
            </TabPane>
            <TabPane tabId={3}>
                <SocialProfileCards />
            </TabPane>
            <TabPane tabId={4}>
                <Photos />
            </TabPane>
        </TabContent>
    )
}
export default SocialTabContents