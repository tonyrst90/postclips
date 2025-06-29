import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SolidBorderStyleTitle } from '@/Constant'
import { solidBordersStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SolidBorderStyleForm from './SolidBorderStyleForm'
import CommonCardFooter from '../../Common/CommonCardFooter'

const SolidBorderStyle = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={SolidBorderStyleTitle} span={solidBordersStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <SolidBorderStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
            </Card>
        </Col>
    )
}
export default SolidBorderStyle