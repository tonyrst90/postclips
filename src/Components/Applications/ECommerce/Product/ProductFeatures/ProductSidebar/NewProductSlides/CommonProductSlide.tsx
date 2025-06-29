import { ImagePath } from '@/Constant'
import { commonProductSlideList } from '@/Data/Applications/ECommerce/Product'
import { CommonProductSlideProp } from '@/Types/ECommerce.type'
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'reactstrap'

const CommonProductSlide: React.FC<CommonProductSlideProp> = ({ data }) => {
    return (
        <Row className='product-box mb-4'>
            <Col md={5} className="product-img">
                <Image className="img-fluid img-100" src={`${ImagePath}/ecommerce/${data.image}`} width={100} height={109} alt="product" />
            </Col>
            <Col md={7} className="product-details text-start">
                <span>
                    {commonProductSlideList.map((index) => (
                        <i className="fa fa-star font-warning me-1" key={index} />
                    ))}
                </span>
                <p className="mb-0">{data.title}</p>
                <div className="product-price">{data.text}</div>
            </Col>
        </Row>
    )
}
export default CommonProductSlide;