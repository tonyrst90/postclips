import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { InlineStyleTitle } from '@/Constant'
import { inlineStyleSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import InlineStyleForm from './InlineStyleForm'
import CommonCardFooter from '../../Common/CommonCardFooter'

const InlineStyle = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={InlineStyleTitle} span={inlineStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <InlineStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="warning" color2="transparent" btn2Class='list-light-warning' />
            </Card>
        </Col>
    )
}
export default InlineStyle