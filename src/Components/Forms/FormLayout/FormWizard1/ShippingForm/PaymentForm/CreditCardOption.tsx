import { ImagePath } from '@/Constant';
import { PaymentFormProps } from '@/Types/Forms.type';
import Image from 'next/image';
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap';
import CreditCardForm from './CreditCardForm';

const CreditCardOption: React.FC<PaymentFormProps> = ({ payMethod, updateFormData }) => {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 pay-info light-card">
                <div>
                    <div>
                        <FormGroup check className="radio radio-primary">
                            <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" checked={payMethod === "creditCard"} onChange={updateFormData} />
                            <Label className="mb-0 f-w-600" htmlFor="shipping-choose6" check>{'Credit Card'}</Label>
                        </FormGroup>
                        <p>{"Transferring money securely through your bank account. Mastercard, Visa, Discover, and Stripe are all accepted"}</p>
                    </div>
                    <div>
                        <Image src={`${ImagePath}/forms/credit-card.png`} width={101} height={50} alt="paypal" />
                    </div>
                </div>
                <CreditCardForm />
            </div>
        </Col>
    );
}
export default CreditCardOption