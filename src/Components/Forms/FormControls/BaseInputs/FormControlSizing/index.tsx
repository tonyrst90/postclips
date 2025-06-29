import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FormControlSizingTitle } from '@/Constant';
import { formControlSizingSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap'

const FormControlSizing = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FormControlSizingTitle} span={formControlSizingSubTitle} />
                <CardBody>
                    <Input bsSize='sm' type="text" placeholder=".form-control-sm" />
                </CardBody>
            </Card>
        </Col>
    )
}
export default FormControlSizing;