import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import SVG from '@/CommonComponent/SVG'
import { ImagePath, VariationRadioTitle } from '@/Constant'
import { variationRadioData, variationRadioSubTitle } from '@/Data/Forms/FormControls'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const VariationRadio = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VariationRadioTitle} span={variationRadioSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {variationRadioData.map((data) => (
                            <Col xl={4} className={data.id !== 3 ? 'col-md-6' : ''} key={data.id}>
                                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                                    <h6 className="sub-title">{data.title}</h6>
                                    {data.child.map((item) => (
                                        <div className="payment-wrapper" key={item.id}>
                                            <div className="payment-first">
                                                <FormGroup className="radio radio-primary" check>
                                                    <Input id={`ptm${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                                                    <Label className="mb-0" htmlFor={`ptm${item.id}`} check>{item.labelText}</Label>
                                                </FormGroup>
                                            </div>
                                            {(data.id === 1 || data.id === 3) && (
                                                <div className="payment-second">
                                                    {item.image && (<Image className="img-fluid" src={`${ImagePath}/ecommerce/${item.image}`} width={50} height={30} alt="ecommerce" />)}
                                                    {item.icon && (<SVG className={`mega-icons stroke-${item.iconColor}`} iconId={item.icon} />)}
                                                </div>
                                            )}
                                        </div>
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
export default VariationRadio