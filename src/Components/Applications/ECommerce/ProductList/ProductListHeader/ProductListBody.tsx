import { productListBodyData } from '@/Data/Applications/ECommerce/ProductList';
import React from 'react'
import { Col, Input, Row } from 'reactstrap'

const ProductListBody = () => {
    return (
        <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
            {productListBodyData.map((item, index) => (
                <Col key={index}>
                    <Input type="select">
                        <option value=''>{item.name}</option>
                        {item.options.map((data, id) => (
                            <option key={id} value={id + 1}>{data}</option>
                        ))}
                    </Input>
                </Col>
            ))}
        </Row>
    )
}
export default ProductListBody;