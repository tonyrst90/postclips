import { InlineSwitchesTitle } from '@/Constant'
import React from 'react'
import { Col, FormGroup, Input } from 'reactstrap'

const InlineSwitches = () => {
    return (
        <Col md={12} xl={4}>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{InlineSwitchesTitle}</h6>
                <div className="form-check-size">
                    <FormGroup check inline switch>
                        <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" defaultChecked />
                    </FormGroup>
                    <FormGroup check switch inline>
                        <Input className="check-size" id="flexSwitchCheckDefault3" type="checkbox" />
                    </FormGroup>
                    <FormGroup check switch inline>
                        <Input className="check-size" id="flexSwitchCheckDisabled3" type="checkbox" disabled />
                    </FormGroup>
                </div>
            </div>
        </Col>
    )
}
export default InlineSwitches