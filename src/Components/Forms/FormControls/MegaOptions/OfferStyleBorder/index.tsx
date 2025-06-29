import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OfferStyleBorderTitle } from '@/Constant'
import { offerStyleBorderSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import OfferStyleBorderForm from './OfferStyleBorderForm'
import CommonCardFooter from '../../Common/CommonCardFooter'

const OfferStyleBorder = () => {
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={OfferStyleBorderTitle} span={offerStyleBorderSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <OfferStyleBorderForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="success" color2="transparent" btn2Class='list-light-success' />
            </Card>
        </Col>
    )
}
export default OfferStyleBorder