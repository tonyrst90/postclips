import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VerticalStyleTitle } from '@/Constant'
import { verticalStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import VerticalStyleForm from './VerticalStyleForm'
import CommonCardFooter from '../../Common/CommonCardFooter'

const VerticalStyle = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-12">
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={VerticalStyleTitle} span={verticalStyleSubTitle} />
                <CardBody>
                    <VerticalStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
            </Card>
        </Col>
    )
}
export default VerticalStyle