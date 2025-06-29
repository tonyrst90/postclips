import { OrderListTitle } from '@/Constant';
import React from 'react'
import { Col } from 'reactstrap'

const OrderList = () => {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100'>
                <h6 className="sub-title fw-bold">{OrderListTitle}</h6>
                <ol>
                    <li>{'Ui Kits'}</li>
                    <li>{'Bonus Ui'}</li>
                    <li>{'Animations'}</li>
                    <li>
                        <ol>
                            <li>{'Typography'}</li>
                            <li>{'Avatars'}</li>
                            <li>{'Grid'}</li>
                            <li>{'Tag & pills'}</li>
                            <li>{'Alert'}</li>
                        </ol>
                    </li>
                    <li>{'Dropdown'}</li>
                    <li>{'Tabs'}</li>
                    <li>{'Accordion'}</li>
                </ol>
            </div>
        </Col>
    )
}
export default OrderList;