import { Country } from '@/Constant';
import { countryMenu } from '@/Data/Applications/ECommerce/Product';
import React from 'react'
import { Col, Input, Label } from 'reactstrap'

const CheckoutSelect = () => {
    return (
        <Col xs={12} className='mb-3'>
            <Label>{Country}</Label>
            <Input type="select">
                {countryMenu.map((items, i) => (
                    <option key={i}>{items}</option>
                ))}
            </Input>
        </Col>
    )
}
export default CheckoutSelect;