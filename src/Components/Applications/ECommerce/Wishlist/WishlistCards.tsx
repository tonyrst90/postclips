import { Dollar, Href, ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { addCartData, fetchProductData } from '@/Redux/Reducers/ECommerce/ProductReducer';
import { ProductDataTypes } from '@/Types/ECommerce.type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { Button, Col, Row } from 'reactstrap';

const WishlistCards = () => {
    const router = useRouter();
    const productItem = useAppSelector((state) => state.product.productItem);
    const dispatch = useAppDispatch();
    const moveToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
        router.push(`/app/ecommerce/cart`);
    };
    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    return (
        <Row className='g-sm-4 g-3'>
            {productItem.map((item) => (
                <Col xl={4} md={6} key={item.id}>
                    <div className="prooduct-details-box">
                        <div className="d-flex gap-3">
                            <Image width={60} height={60} className="align-self-center img-fluid img-60" src={`${ImagePath}/${item.image}`} alt="#" />
                            <div className="flex-grow-1 ms-3">
                                <div className="product-name">
                                    <h6><a href={Href}>{item.name}</a></h6>
                                </div>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    {'Price'}
                                    <span>: {Dollar}{item.price}</span>
                                </div>
                                <div className="avaiabilty">
                                    <div className="txt-success">{item.stock}</div>
                                </div>
                                <Button color="primary" size="xs" onClick={() => moveToCart(item)}>
                                    {'Move to Cart'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
export default WishlistCards;