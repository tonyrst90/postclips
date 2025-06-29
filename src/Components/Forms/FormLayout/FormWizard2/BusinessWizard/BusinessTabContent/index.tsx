import { VerticalWizardNavProps } from '@/Types/Forms.type'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import ChooseAccount from './ChooseAccount'
import BusinessSettingsForm from './BusinessSettingsForm'
import ContactDetailsForm from './ContactDetailsForm'
import PayDetailsForm from './PayDetailsForm'
import CompletedForm from '../../Common/CompletedForm'

const BusinessTabContent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
    return (
        <TabContent className="dark-field" activeTab={steps}>
            <TabPane tabId={1}>
                <ChooseAccount activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={2}>
                <BusinessSettingsForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={3}>
                <ContactDetailsForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={4}>
                <PayDetailsForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={5}>
                <CompletedForm />
            </TabPane>
        </TabContent>
    )
}
export default BusinessTabContent