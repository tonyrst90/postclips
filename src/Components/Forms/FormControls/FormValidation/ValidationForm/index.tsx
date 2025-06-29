import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import FormCard from './FormCard'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ValidationFormTitle } from '@/Constant'
import { validationFormSubTitle } from '@/Data/Forms/FormControls'

const ValidationForm = () => {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={ValidationFormTitle} span={validationFormSubTitle} />
                <CardBody>
                    <FormCard />
                </CardBody>
            </Card>
        </Col>
    )
}
export default ValidationForm;