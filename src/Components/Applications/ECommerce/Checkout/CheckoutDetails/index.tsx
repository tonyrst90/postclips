import { Dollar } from '@/Constant';
import { useAppSelector } from '@/Redux/Hooks';
import { ProductDataTypes } from '@/Types/ECommerce.type';
import React from 'react'
import { Col, Input, Label } from 'reactstrap';
import PaymentRadioOptions from './PaymentRadioOptions';

const CheckoutDetails = () => {
    const { cartData } = useAppSelector((state) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <Col xl={6} sm={12}>
            <div className="checkout-details">
                <div className="order-box">
                    <div className="title-box">
                        <div className="checkbox-title">
                            <h4>{'Product '}</h4>
                            <span>{'Total'}</span>
                        </div>
                    </div>
                    {cartData &&
                        cartData.map((item) => (
                            <ul className="qty" key={item.id}>
                                <li>{item.name} x {item.quantity}<span>{Dollar}{item.price}</span></li>
                            </ul>
                        ))}
                    <ul className="sub-total">
                        <li>{'Subtotal '}<span className="count">{Dollar}{cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></li>
                        <li className="shipping-class">{'Shipping'}
                            <div className="shopping-checkout-option">
                                <Label className="d-block" htmlFor="chk-ani">
                                    <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />{'Option 1'}
                                </Label>
                                <Label className="d-block" htmlFor="chk-ani1">
                                    <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{'Option 2'}
                                </Label>
                            </div>
                        </li>
                    </ul>
                    <ul className="sub-total total">
                        <li>{'Total '}<span className="count">{Dollar}{cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></li>
                    </ul>
                    <div className="animate-chk"><PaymentRadioOptions /></div>
                </div>
            </div>
        </Col>
    )
}
export default CheckoutDetails;