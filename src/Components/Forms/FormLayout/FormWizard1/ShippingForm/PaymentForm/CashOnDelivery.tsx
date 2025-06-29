import { ImagePath } from '@/Constant'
import { PaymentFormProps } from '@/Types/Forms.type'
import Image from 'next/image'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const CashOnDelivery: React.FC<PaymentFormProps> = ({ payMethod, updateFormData }) => {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 light-card">
                <div>
                    <FormGroup check className="radio radio-primary">
                        <Input id="shipping-choose7" type="radio" name="paymentMethodName" value="cashOnDelivery" checked={payMethod === "cashOnDelivery"} onChange={updateFormData} />
                        <Label className="mb-0 f-w-600" htmlFor="shipping-choose7" check>{'Cash On Delivery'}</Label>
                    </FormGroup>
                    <p>{"After your order is delivered, make a cash payment"}</p>
                </div>
                <div>
                    <Image src={`${ImagePath}/forms/delivery.png`} width={75} height={50} alt="paypal" />
                </div>
            </div>
        </Col>
    )
}
export default CashOnDelivery