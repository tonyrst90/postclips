import { Dollar } from '@/Constant';
import { useAppSelector } from '@/Redux/Hooks';
import { ProductDataTypes } from '@/Types/ECommerce.type';
import Link from 'next/link';
import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';

const CartBodyContent = () => {
    const { cartData } = useAppSelector((state) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <>
            <tr>
                <td colSpan={4}>
                    <InputGroup>
                        <Input className="me-2" type="text" placeholder="Enter coupon code" />
                        <Button color="primary"> {'Apply'}</Button>
                    </InputGroup>
                </td>
                <td className="total-amount">
                    <h3 className="m-0 text-end">
                        <span className="f-w-600">{'Total Price'} :</span>
                    </h3>
                </td>
                <td><span>{Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></td>
            </tr>
            <tr>
                <td className="text-end" colSpan={5}>
                    <Link href="/app/ecommerce/product" className="btn btn-secondary cart-btn-transform">
                        {'Continue Shopping'}
                    </Link>
                </td>
                <td>
                    <Link className="btn btn-success cart-btn-transform" href="/app/ecommerce/checkout">
                        {'Check Out'}
                    </Link>
                </td>
            </tr>
        </>
    )
}
export default CartBodyContent;