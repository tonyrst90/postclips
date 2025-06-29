import { ImagePath } from '@/Constant'
import { PaymentFormProps } from '@/Types/Forms.type'
import Image from 'next/image'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const PayPalOption: React.FC<PaymentFormProps> = ({ payMethod, updateFormData }) => {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 light-card">
                <div>
                    <FormGroup check className="radio radio-primary">
                        <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" checked={payMethod === "Paypal"} onChange={updateFormData} />
                        <Label className="mb-0 f-w-600" htmlFor="shipping-choose5" check>{'Paypal'}</Label>
                    </FormGroup>
                    <p>{"You will be taken to the paypal website to finish your transaction safely"}</p>
                </div>
                <div>
                    <Image src={`${ImagePath}/checkout/paypal.png`} width={145} height={50} alt="paypal" />
                </div>
            </div>
        </Col>
    )
}
export default PayPalOption