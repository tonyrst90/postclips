import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ImagePath, ImagesCheckboxTitle } from '@/Constant'
import { imagesWithCheckBoxSubTitle, imageWithCheckboxData } from '@/Data/Forms/FormControls'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'

const ImagesWithCheckbox = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ImagesCheckboxTitle} span={imagesWithCheckBoxSubTitle} />
                <CardBody>
                    <div className="main-img-checkbox">
                        <Row className="g-3">
                            {imageWithCheckboxData.map((data) => (
                                <Col xxl={3} sm={6} key={data.id}>
                                    <div className="card-wrapper border rounded-3 checkbox-checked">
                                        <h6 className="sub-title">{data.title}</h6>
                                        <div className="img-checkbox">
                                            <Input className="main-img-cover" id={`img-check-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} disabled={data.disabled ? true : false} />
                                            <Label className="mb-0" htmlFor={`img-check-${data.id}`} check>
                                                <Image src={`${ImagePath}/switch/${data.image}`} alt="images" width={100} height={220} />
                                            </Label>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ImagesWithCheckbox