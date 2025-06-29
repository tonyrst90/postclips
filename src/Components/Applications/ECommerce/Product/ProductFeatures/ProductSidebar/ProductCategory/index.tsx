import React from 'react'
import CategoryFilter from './CategoryFilter'
import BrandFilter from './BrandFilter'
import ColorsFilter from './ColorsFilter'
import PriceRange from './PriceRange'

const ProductCategory = () => {
    return (
        <>
            <div className="product-filter">
                <h3>{'Category'}</h3>
                <CategoryFilter />
            </div>
            <div className="product-filter">
                <h3>{'Brand'}</h3>
                <BrandFilter />
            </div>
            <div className="product-filter slider-product">
                <h3>{'Colors'}</h3>
                <ColorsFilter />
            </div>
            <div className="product-filter pb-0">
                <h3>{'Price'}</h3>
                <PriceRange />
                <h3>{'New Products'}</h3>
            </div>
        </>
    )
}
export default ProductCategory