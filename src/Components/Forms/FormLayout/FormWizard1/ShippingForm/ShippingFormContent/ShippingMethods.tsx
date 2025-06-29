import { ProceedToBack, ProceedToNext } from '@/Constant';
import { shippingMethodsData } from '@/Data/Forms/FormLayout';
import { ShippingInformationProps } from '@/Types/Forms.type';
import React from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

const ShippingMethods: React.FC<ShippingInformationProps> = ({ radioBoxValues, updateFormData, handleNextButton, handleBackButton }) => {
    const { shippingMethod } = radioBoxValues;
    return (
        <Row className="shipping-method g-3">
            {shippingMethodsData.map((data, index) => (
                <Col sm={6} key={index}>
                    <div className="card-wrapper border rounded-3 h-100 light-card">
                        <FormGroup check className="radio radio-primary">
                            <Input id={data.value} type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={updateFormData} />
                            <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
                        </FormGroup>
                        <p>{data.details}</p>
                    </div>
                </Col>
            ))}
            <Col xs={12} className="text-end">
                <Button onClick={handleBackButton} color="primary" className='me-1 mb-2'>
                    <i className="fa fa-truck proceed-prev pe-2" />{ProceedToBack}
                </Button>
                <Button onClick={handleNextButton} color="primary">{ProceedToNext}
                    <i className="fa fa-truck proceed-next pe-2" />
                </Button>
            </Col>
        </Row>
    )
}
export default ShippingMethods