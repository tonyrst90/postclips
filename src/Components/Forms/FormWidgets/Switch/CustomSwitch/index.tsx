import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CustomSwitchTitle } from '@/Constant';
import { customSwitchData, customSwitchSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap'

const CustomSwitch = () => {
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomSwitchTitle} span={customSwitchSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {customSwitchData.map((data) => (
                            <Col md={4} key={data.id} className={data.id !== 3 ? 'col-sm-6' : ""}>
                                <div className={`card-wrapper border rounded-3 ${data.cardClass ? data.cardClass : ''}`}>
                                    <div className={`form-check-size ${data.formsize ? data.formsize : ''}`}>
                                        {data.child.map((item) => (
                                            <FormGroup key={item.id} check switch inline>
                                                <Input className={`switch-${item.color} check-size`} type="checkbox"
                                                    disabled={item.disabled ? true : false} defaultChecked
                                                />
                                            </FormGroup>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomSwitch;