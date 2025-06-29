import { IconsRadioTitle } from '@/Constant'
import { iconRadioData } from '@/Data/Forms/FormControls'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const IconsRadio = () => {
    return (
        <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <h6 className="sub-title">{IconsRadioTitle}</h6>
                <FormGroup className="radio radio-primary ps-0" check>
                    <ul className='radio-wrapper'>
                        {iconRadioData.map((data) => (
                            <li key={data.id}>
                                <Input id={`radio${data.id}`} type="radio" name="radio2" value="option2" defaultChecked={data.check ? true : false} />
                                <Label htmlFor={`radio${data.id}`} check><i className={`fa fa-${data.icon}`} /><span>{data.text}</span></Label>
                            </li>
                        ))}
                    </ul>
                </FormGroup>
            </div>
        </Col>
    )
}
export default IconsRadio