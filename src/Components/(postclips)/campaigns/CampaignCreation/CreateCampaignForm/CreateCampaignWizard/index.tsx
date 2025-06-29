import SVG from '@/CommonComponent/SVG';
import { Href } from '@/Constant';
import { addProductNav } from '@/Data/Applications/ECommerce/Product';
import { verticalWizardNav } from '@/Data/Forms/FormLayout';
import { ProductFormNavProps } from '@/Types/ECommerce.type';
import React, { useState } from 'react'
import { Col, Nav, NavItem, NavLink } from 'reactstrap'

const steps = [
    {
        id: 1,
        title: 'Campaign Details',
    },
    {
        id: 2,
        title: 'Cart Info',
    },
    {
        id: 3,
        title: 'Net Banking',
    },
];

interface CreateCampaignWizardProps {
}


const CreateCampaignWizard: React.FC<CreateCampaignWizardProps> = () => {
    const [currentStep, setCurrentStep] = useState(1);


    return (
        <Col xxl={12} xl={12} className="box-col-4e sidebar-left-wrapper">
            <Nav className="header-vertical-wizard" id="wizard-tab">
                {steps.map((data) => (
                    <NavLink key={data.id} className={currentStep === data.id ? "active" : ''}>
                        <div className="vertical-wizard">
                            <div>{data.id}</div>
                            {/* <div className="stroke-icon-wizard">
                                <i className={`fa fa-${data.icon}`} />
                            </div>
                            <div className="vertical-wizard-content">
                                <h3>{data.title}</h3>
                                <p>{data.subTitle}</p>
                            </div> */}
                        </div>
                    </NavLink>
                ))}
            </Nav>
        </Col>
    )
}
export default CreateCampaignWizard;