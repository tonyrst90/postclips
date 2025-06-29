import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/ECommerce/ProductReducer';
import { ProductQuantityProp } from '@/Types/ECommerce.type';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';

const ProductQuantity: React.FC<ProductQuantityProp> = ({ dataId, modelData }) => {
    const [cartCount, setCartCount] = useState(1);
    const dispatch = useAppDispatch();
    const incrementCount = () => {
        setCartCount(cartCount + 1);
    };
    const decrementCount = () => {
        if (cartCount === 1) {
            return;
        } else {
            setCartCount(cartCount - 1);
        }
    };
    const handleAddToCart = () => {
        dispatch(addCartData({ id: dataId, item: modelData, increment: cartCount }));
    };
    return (
        <div className="product-qnty">
            <h3>{'Quantity'}</h3>
            <fieldset>
                <InputGroup>
                    <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={decrementCount}>
                        <i className="fa fa-minus" />
                    </Button>
                    <InputGroupText className="bootstrap-touchspin-prefix d-none"></InputGroupText>
                    <Input className="touchspin text-center" type="text" name="quantity" value={cartCount} readOnly />
                    <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={incrementCount}>
                        <i className="fa fa-plus" />
                    </Button>
                </InputGroup>
            </fieldset>
            <div className="addcart-btn">
                <Link href={'/app/ecommerce/cart'} className='btn btn-primary me-2' onClick={handleAddToCart}>
                    {'Add to Cart'}
                </Link>
                <Link href={'/app/ecommerce/product_page'} className='btn btn-primary ms-2'>
                    {'View Details'}
                </Link>
            </div>
        </div>
    )
}
export default ProductQuantity;