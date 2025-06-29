import { useAppDispatch } from '@/Redux/Hooks';
import { addCartData } from '@/Redux/Reducers/ECommerce/ProductReducer';
import { ButtonLinksProp } from '@/Types/ECommerce.type';
import Link from 'next/link';
import React from 'react'

const ButtonLinks: React.FC<ButtonLinksProp> = ({ product }) => {
    const dispatch = useAppDispatch();
    const addToCart = () => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="m-t-15 btn-showcase">
            <Link className="btn btn-primary" href={`/app/ecommerce/cart`} onClick={addToCart}>
                <i className="fa fa-shopping-basket me-1" />
                {'Add To Cart'}
            </Link>
            <Link className="btn btn-success" href={`/app/ecommerce/checkout`}>
                <i className="fa fa-shopping-cart me-1" />
                {'Buy Now'}
            </Link>
            <Link className="btn btn-secondary" href={`/app/ecommerce/wishlist`}>
                <i className="fa fa-heart me-1" />
                {'Add To WishList'}
            </Link>
        </div>
    )
}
export default ButtonLinks;