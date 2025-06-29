import { Dollar } from '@/Constant'
import { ProductDetailsProps } from '@/Types/ECommerce.type'
import Link from 'next/link'
import React from 'react'

const ProductDetails: React.FC<ProductDetailsProps> = ({ item }) => {
    return (
        <div className="product-details">
            <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
            </div>
            <Link href={`/app/ecommerce/product_page${item.id}`}>
                <h4>{item.name}</h4>
            </Link>
            <p>{item.note}</p>
            <div className="product-price">
                {Dollar} {item.price}
                <del>
                    {Dollar} {item.discountPrice}
                </del>
            </div>
        </div>
    )
}
export default ProductDetails;