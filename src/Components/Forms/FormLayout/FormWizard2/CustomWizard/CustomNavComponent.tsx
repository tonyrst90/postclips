import { customNavData } from '@/Data/Forms/FormLayout'
import { VerticalWizardNavProps } from '@/Types/Forms.type'
import React from 'react'
import { Nav, NavLink } from 'reactstrap'

const CustomNavComponent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
    return (
        <Nav className="horizontal-options" pills>
            {customNavData.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="horizontal-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`} />
                        </div>
                        <div className="horizontal-wizard-content">
                            <h6>{data.title}</h6>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
export default CustomNavComponent