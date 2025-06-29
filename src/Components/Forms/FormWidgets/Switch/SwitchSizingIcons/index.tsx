import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { switchSizingIconsData } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'

const SwitchSizingIcons = () => {
    return (
        <>
            {switchSizingIconsData.map((data) => (
                <Col md={12} key={data.id}>
                    <Card>
                        <CommonCardHeader headClass='pb-0' title={data.title} span={data.subTitle} />
                        <CardBody className="common-flex switch-wrapper">
                            {data.child.map((item) => (
                                <div className="d-flex" key={item.id}>
                                    <Label className="col-form-label m-r-10">{item.labelText}</Label>
                                    <div className={`flex-grow-1 text-end ${item.size ? item.size : ''}`}>
                                        <Label className="switch">
                                            <Input type="checkbox" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                                            <span className='switch-state' />
                                        </Label>
                                    </div>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default SwitchSizingIcons;