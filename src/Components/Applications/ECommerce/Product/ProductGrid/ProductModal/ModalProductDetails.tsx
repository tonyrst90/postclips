import { Dollar } from '@/Constant';
import { productSize } from '@/Data/Applications/ECommerce/Product';
import { ModalProductDetailsProp } from '@/Types/ECommerce.type';
import React from 'react'
import { Button } from 'reactstrap';

const ModalProductDetails: React.FC<ModalProductDetailsProp> = ({ modelData }) => {
    return (
        <>
            <h4>{modelData?.name}</h4>
            <div className="product-price">
                {Dollar} {modelData?.discountPrice}
                <del>
                    {Dollar} {modelData?.price}
                </del>
            </div>
            <div className="product-view">
                <h3>{'Product Details'}</h3>
                <p className="mb-0">{modelData?.discription}</p>
            </div>
            <div className="product-size">
                <ul>
                    {productSize.map((items: string, i: number) => (
                        <li key={i} className="me-2">
                            <Button color="light" outline>{items}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ModalProductDetails;