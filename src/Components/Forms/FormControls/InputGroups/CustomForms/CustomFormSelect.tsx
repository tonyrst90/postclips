import { CustomFormSelectProps } from '@/Types/Forms.type';
import React from 'react'
import { Input } from 'reactstrap'

const CustomFormSelect: React.FC<CustomFormSelectProps> = ({ inputId, options, title }) => {
    return (
        <Input type="select" id={inputId}>
            <option>{title}</option>
            {options.map((item, i) => (
                <option key={i} value={i}>{item}</option>
            ))}
        </Input>
    )
}
export default CustomFormSelect;