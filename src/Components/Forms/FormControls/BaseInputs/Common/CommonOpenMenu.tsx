import { OpenSelectMenu, WorksWithSelects } from '@/Constant';
import { CommonOpenMenuProps } from '@/Types/Forms.type';
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const CommonOpenMenu: React.FC<CommonOpenMenuProps> = ({ inputId, colClass, options }) => {

    return (
        <Col className={colClass}>
            <FormGroup floating>
                <Input type="select" id={inputId}>
                    <option value=''>{OpenSelectMenu}</option>
                    {options.map((item, i) => (
                        <option key={i} value={i}>{item}</option>
                    ))}
                </Input>
                <Label for={inputId}>{WorksWithSelects}</Label>
            </FormGroup>
        </Col>
    )
}
export default CommonOpenMenu;