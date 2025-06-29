import { FilledRadioTitle } from '@/Constant'
import { filledRadioData } from '@/Data/Forms/FormControls'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const FilledRadio = () => {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
                <h6 className="sub-title">{FilledRadioTitle} </h6>
                {filledRadioData.map((data) => (
                    <FormGroup key={data.id} className={`radio radio-${data.color}`} check>
                        <Input id={`radio${data.id}`} type="radio" name="radio3" value="option3" defaultChecked={data.check ? true : false} />
                        <Label htmlFor={`radio${data.id}`} check> {data.text}</Label>
                    </FormGroup>
                ))}
            </div>
        </Col>
    )
}
export default FilledRadio