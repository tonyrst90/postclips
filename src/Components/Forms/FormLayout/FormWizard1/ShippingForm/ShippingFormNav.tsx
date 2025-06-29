import { shippingFormNav } from '@/Data/Forms/FormLayout'
import { VerticalWizardNavProps } from '@/Types/Forms.type'
import React from 'react'
import { Nav, NavLink } from 'reactstrap'

const ShippingFormNav: React.FC<VerticalWizardNavProps> = ({ activeCallBack, steps }) => {
    return (
        <Nav className="horizontal-options shipping-options" pills>
            {shippingFormNav.map((data) => (
                <NavLink key={data.id} className={`b-r-0 ${steps === data.id ? "active" : ''}`} onClick={() => activeCallBack(data.id)}>
                    <div className="cart-options">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`} />
                        </div>
                        <div className="cart-options-content">
                            <h3>{data.title}</h3>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
export default ShippingFormNav