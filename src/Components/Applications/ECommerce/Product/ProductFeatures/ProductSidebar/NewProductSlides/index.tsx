import { productSettings, productSlide1, productSlide2 } from '@/Data/Applications/ECommerce/Product';
import React from 'react'
import Slider from 'react-slick'
import CommonProductSlide from './CommonProductSlide';

const NewProductSlides = () => {
    return (
        <div className="product-filter pb-0 new-products">
            <div className="owl-carousel owl-theme" id="testimonial">
                <Slider {...productSettings}>
                    <div className="item">
                        {productSlide1.map((item, index) => (
                            <CommonProductSlide data={item} key={index} />
                        ))}
                    </div>
                    <div className="item">
                        {productSlide2.map((item, index) => (
                            <CommonProductSlide data={item} key={index} />
                        ))}
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default NewProductSlides;