import { VerticalWizardNavProps } from '@/Types/Forms.type'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import PersonalInfoForm from './PersonalInfoForm'
import BankInfoForm from './BankInfoForm'
import InquiresForm from './InquiresForm'
import CompletedForm from '../../Common/CompletedForm'

const CustomTabContent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack ,differentId}) => {
    return (
        <TabContent className=" dark-field " activeTab={steps}> 
            <TabPane tabId={1}>
                <PersonalInfoForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={2}>
                <BankInfoForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={3}>
                <InquiresForm activeCallBack={activeCallBack} differentId={differentId} />
            </TabPane>
            <TabPane tabId={4}>
                <CompletedForm />
            </TabPane>
        </TabContent>
    )
}
export default CustomTabContent