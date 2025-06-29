import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import { XCircle } from 'react-feather';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import Image from 'next/image';
import { Dollar, Href, ImagePath } from '@/Constant';
import { decrementCart, incrementCart, removeFromCart } from '@/Redux/Reducers/ECommerce/ProductReducer';
import CartBodyContent from './CartBodyContent';

const CartTableBody = () => {
    const dispatch = useAppDispatch();
    const { cartData } = useAppSelector((state) => state.product);

    return (
        <tbody>
            {cartData.map((item, i) => {
                return (
                    item.quantity && (
                        <tr key={i}>
                            <td>
                                <Image width={40} height={40} priority className="img-fluid img-40" src={`${ImagePath}/${item.image}`} alt="#" />
                            </td>
                            <td>
                                <div className="product-name">
                                    <a href={Href}>{item.name}</a>
                                </div>
                            </td>
                            <td>{Dollar}{item.price}</td>
                            <td>
                                <fieldset className="qty-box w-50 border-0">
                                    <InputGroup>
                                        <span className="input-group-prepend p-0">
                                            <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={() => dispatch(decrementCart(i))}>
                                                <i className="fa fa-minus"></i>
                                            </Button>
                                        </span>
                                        <Input type="number" value={item.quantity} readOnly={true} className="input-touchspin text-center" />
                                        <span className="input-group-append p-0">
                                            <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={() => dispatch(incrementCart(i))}>
                                                <i className="fa fa-plus"></i>
                                            </Button>
                                        </span>
                                    </InputGroup>
                                </fieldset>
                            </td>
                            <td> <a href={Href}> <XCircle onClick={() => dispatch(removeFromCart(item.id))} /></a></td>
                            <td> {Dollar}{item.price * item.quantity}</td>
                        </tr>
                    )
                );
            })}
            <CartBodyContent />
        </tbody>
    )
}
export default CartTableBody;