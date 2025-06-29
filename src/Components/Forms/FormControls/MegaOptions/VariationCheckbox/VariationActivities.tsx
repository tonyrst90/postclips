import { activitiesVariationCheckbox } from '@/Data/Forms/FormControls'
import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'

const VariationActivities = () => {
    return (
        <Col xl={4} md={5}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <h6 className="sub-title">{"Which of the following activities do you enjoy doing in your free time?"}</h6>
                {activitiesVariationCheckbox.map((data) => (
                    <div className="payment-wrapper" key={data.id}>
                        <div className="payment-first">
                            <FormGroup className={`checkbox checkbox-${data.color}`} check>
                                <Input id={`check-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                                <Label className="mb-0" htmlFor={`check-${data.id}`} check>{data.text}</Label>
                            </FormGroup>
                        </div>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default VariationActivities