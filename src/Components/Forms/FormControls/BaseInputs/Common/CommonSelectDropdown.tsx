import { CommonSelectDropdownProps } from '@/Types/Forms.type'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const CommonSelectDropdown: React.FC<CommonSelectDropdownProps> = ({ inputClass, options, title, multiple, optionClass }) => {
    return (
        <Col>
            <FormGroup>
                <Label>{title}</Label>
                <Input type="select" className={inputClass} multiple={multiple}>
                    {options.map((item, i) => (
                        <option className={optionClass ? optionClass : ''} key={i}>{item}</option>
                    ))}
                </Input>
            </FormGroup>
        </Col>
    )
}
export default CommonSelectDropdown;