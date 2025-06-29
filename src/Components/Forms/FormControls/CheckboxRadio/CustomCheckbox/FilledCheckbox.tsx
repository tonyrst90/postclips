import { FilledCheckboxTitle, DangerSolidCheckbox, WarningSolidCheckbox, InfoSolidCheckbox } from '@/Constant'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const FilledCheckbox = () => {
    return (
        <Col xl={4} sm={6}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <h6 className="sub-title">{FilledCheckboxTitle} </h6>
                <FormGroup className="checkbox checkbox-solid-warning" check>
                    <Input id="solid4" type="checkbox" defaultChecked />
                    <Label htmlFor="solid4" check> {WarningSolidCheckbox}</Label>
                </FormGroup>
                <FormGroup className="checkbox checkbox-solid-danger" check>
                    <Input id="solid5" type="checkbox" />
                    <Label htmlFor="solid5" check> {DangerSolidCheckbox}</Label>
                </FormGroup>
                <FormGroup className="checkbox checkbox-solid-info" check>
                    <Input id="solid6" type="checkbox" />
                    <Label htmlFor="solid6" check> {InfoSolidCheckbox}</Label>
                </FormGroup>
            </div>
        </Col>
    )
}
export default FilledCheckbox