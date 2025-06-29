import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DisabledOutlineSwitchTitle } from '@/Constant';
import { defaultTouchspinData, disabledOutlineSwitchSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'

const DisabledOutlineSwitch = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DisabledOutlineSwitchTitle} span={disabledOutlineSwitchSubTitle} />
                <CardBody className="common-flex">
                    {defaultTouchspinData.map((data, index) => (
                        <div className="d-flex" key={index}>
                            <div className="flex-shrink-0 text-end icon-state switch-outline">
                                <Label className="switch mb-0">
                                    <Input type="checkbox" />
                                    <span className={`switch-state bg-${data}`} />
                                </Label>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default DisabledOutlineSwitch;