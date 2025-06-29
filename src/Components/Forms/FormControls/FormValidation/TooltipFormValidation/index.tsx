import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import TooltipFormValidationForm from './TooltipFormValidationForm'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { TooltipFormValidationTitle } from '@/Constant'
import { tooltipFormValidationSubTitle } from '@/Data/Forms/FormControls'

const TooltipFormValidation = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={TooltipFormValidationTitle} span={tooltipFormValidationSubTitle} />
                <CardBody>
                    <TooltipFormValidationForm />
                </CardBody>
            </Card>
        </Col>
    )
}
export default TooltipFormValidation;