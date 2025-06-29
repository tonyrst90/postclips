import React from 'react'
import { Col, TabContent, TabPane } from 'reactstrap'
import CampaignDetailsForm from './CampaignDetailsForm'
import ProductGallery from './ProductGallery'
import ProductCategories from './ProductCategories'
import SellingPrice from './SellingPrice'
import AdvanceSection from './AdvanceSection'
import { ProductTabContentProp } from '@/Types/ECommerce.type'
import ProductTwo from './ProductGallery'

const CreateCampaignStates: React.FC<ProductTabContentProp> = ({ steps, activeCallBack }) => {
    return (
        <Col xxl={9} xl={8} className="box-col-8 position-relative">
            <TabContent activeTab={steps}>
                <TabPane tabId={1}>
                    <CampaignDetailsForm activeCallBack={activeCallBack} />
                </TabPane>
                <TabPane tabId={2}>
                    <ProductGallery activeCallBack={activeCallBack} />
                </TabPane>
                <TabPane tabId={3}>
                    <ProductCategories activeCallBack={activeCallBack} />
                </TabPane>
                <TabPane tabId={4}>
                    <SellingPrice activeCallBack={activeCallBack} />
                </TabPane>
                <TabPane tabId={5}>
                    <AdvanceSection activeCallBack={activeCallBack} />
                </TabPane>
            </TabContent>
        </Col>
    )
}
export default CreateCampaignStates