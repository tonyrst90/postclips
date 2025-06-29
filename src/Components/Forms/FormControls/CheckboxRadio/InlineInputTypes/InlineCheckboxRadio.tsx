import { inlineInputTypesData } from '@/Data/Forms/FormControls'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const InlineCheckboxRadio = () => {
    return (
        <>
            {inlineInputTypesData.map((data) => (
                <Col md={6} xl={4} key={data.id}>
                    <div className="card-wrapper border rounded-3 checkbox-checked">
                        <h6 className="sub-title">{data.title}</h6>
                        <div className="form-check-size rtl-input">
                            {data.child.map((item) => (
                                <FormGroup key={item.id} check inline>
                                    <Input className="me-2" id={`inline${item.id}`} type={item.type}
                                        name={item.type === 'radio' ? item.name : ''}
                                        disabled={item.disabled ? true : false}
                                        defaultChecked={item.check ? true : false}
                                    />
                                    <Label htmlFor={`inline${item.id}`} check>
                                        {item.text}
                                    </Label>
                                </FormGroup>
                            ))}
                        </div>
                    </div>
                </Col>
            ))}
        </>
    )
}
export default InlineCheckboxRadio