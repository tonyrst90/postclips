import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { HorizontalStyleTitle } from '@/Constant'
import { horizontalStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import HorizontalStyleForm from './HorizontalStyleForm'
import CommonCardFooter from '../../Common/CommonCardFooter'

const HorizontalStyle = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-12">
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={HorizontalStyleTitle} span={horizontalStyleSubTitle} />
                <CardBody>
                    <HorizontalStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
            </Card>
        </Col>
    )
}
export default HorizontalStyle