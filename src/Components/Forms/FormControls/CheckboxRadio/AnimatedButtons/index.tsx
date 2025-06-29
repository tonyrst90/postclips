import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { AnimatedButtonsTitle } from '@/Constant'
import { animatedButtonsData, animatedButtonsSubTitle } from '@/Data/Forms/FormControls'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'

const AnimatedButtons = () => {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={AnimatedButtonsTitle} span={animatedButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {animatedButtonsData.map((data) => (
                            <Col sm={6} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked">
                                    <h6 className="sub-title">{data.title}</h6>
                                    {data.child.map((item) => (
                                        <Fragment key={item.id}>
                                            <Label className="d-block"></Label>
                                            <Input className={`${item.type}_animated`} type={item.type}
                                                defaultChecked={item.check ? true : false} name={item.type === 'radio' ? item.name : ''} />
                                            {item.text}
                                        </Fragment>
                                    ))}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default AnimatedButtons