import React from 'react'
import { ProductDataTypes, ProductHoverProps } from '../../../../../Types/ECommerce.type';
import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/ECommerce/ProductReducer';
import Link from 'next/link';
import { Href } from '@/Constant';

const ProductHover: React.FC<ProductHoverProps> = ({ onClickHandle, item }) => {
    const dispatch = useAppDispatch();
    const addToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="product-hover">
            <ul>
                <li>
                    <Link href={`/app/ecommerce/cart`} onClick={() => addToCart(item)}>
                        <i className="icon-shopping-cart" />
                    </Link>
                </li>
                <li>
                    <a href={Href} onClick={() => onClickHandle(item)}>
                        <i className="icon-eye" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default ProductHover;