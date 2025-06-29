import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { iconsUncheckedBordersSwitchData } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'

const IconUncheckedBorderSwitch = () => {
    return (
        <>
            {iconsUncheckedBordersSwitchData.map((data) => (
                <Col xl={4} className={data.id !== 3 ? 'col-sm-6' : ""} key={data.id}>
                    <Card className="height-equal">
                        <CommonCardHeader headClass='pb-0' title={data.title} span={data.subTitle} />
                        <CardBody className="common-flex flex-column switch-wrapper">
                            {data.child.map((item) => (
                                <div className="d-flex" key={item.id}>
                                    <div className={`flex-shrink-0 text-end ${item.mediaBodyClass ? item.mediaBodyClass : ''}`}>
                                        <Label className="switch mb-0">
                                            <Input type="checkbox" defaultChecked />
                                            <span className={`switch-state bg-${item.color}`}></span>
                                        </Label>
                                    </div>
                                    <Col><Label className="m-l-10">{item.labelText}</Label></Col>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default IconUncheckedBorderSwitch;