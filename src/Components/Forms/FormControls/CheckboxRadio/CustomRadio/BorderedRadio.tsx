import { BorderedRadioTitle } from '@/Constant'
import { borderedRadioData } from '@/Data/Forms/FormControls'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const BorderedRadio = () => {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <h6 className="sub-title">{BorderedRadioTitle}</h6>
                {borderedRadioData.map((data) => (
                    <FormGroup key={data.id} className={`radio radio-${data.color}`} check>
                        <Input id={`radio${data.id}`} type="radio" name="radio1" value="option1" defaultChecked={data.check ? true : false} />
                        <Label htmlFor={`radio${data.id}`} check>{data.text}</Label>
                    </FormGroup>
                ))}
            </div>
        </Col>
    )
}
export default BorderedRadio