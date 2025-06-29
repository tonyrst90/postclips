import { ImagePath } from '@/Constant';
import Image from 'next/image';
import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const PaymentRadioOptions = () => {
    return (
        <Row>
            <Col>
                <Label className="d-block" htmlFor="edo-ani">
                    <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                    {'Check Payments'}
                </Label>
                <Label className="d-block" htmlFor="edo-ani1">
                    <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                    {'Cash On Delivery'}
                </Label>
                <Label className="d-block" htmlFor="edo-ani2">
                    <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" />
                    {'PayPal'}
                    <Image width={202} height={70} priority className="img-paypal" src={`${ImagePath}/checkout/paypal.png`} alt="" />
                </Label>
            </Col>
        </Row>
    )
}
export default PaymentRadioOptions;