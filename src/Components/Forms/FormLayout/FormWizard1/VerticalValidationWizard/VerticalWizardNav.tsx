import { verticalWizardNav } from '@/Data/Forms/FormLayout'
import { VerticalWizardNavProps } from '@/Types/Forms.type'
import React from 'react'
import { Nav, NavLink } from 'reactstrap'

const VerticalWizardNav: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
    return (
        <Nav className="flex-column header-vertical-wizard" id="wizard-tab">
            {verticalWizardNav.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="vertical-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`} />
                        </div>
                        <div className="vertical-wizard-content">
                            <h3>{data.title}</h3>
                            <p>{data.subTitle}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
export default VerticalWizardNav