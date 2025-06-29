import { PayMethodTitle } from '@/Constant';
import { RadioPayMethodProps } from '@/Types/Forms.type';
import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const RadioPayMethod: React.FC<RadioPayMethodProps> = ({ colClass }) => {
    return (
        <div className={colClass}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{PayMethodTitle}</h6>
                <div className="radio-form">
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault1" required />
                        <Label htmlFor="flexRadioDefault1" check>{'Visa'}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault2" required />
                        <Label htmlFor="flexRadioDefault2" check>{'MasterCard'}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked required />
                        <Label htmlFor="flexRadioDefault3" check>{'Paypal'}</Label>
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
export default RadioPayMethod;