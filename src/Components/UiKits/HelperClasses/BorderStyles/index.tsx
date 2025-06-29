import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BorderStylesTitle } from '@/Constant'
import { borderStyleSubTitle } from '@/Data/UiKits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CustomBorder from './CustomBorder'
import BorderColor from './BorderColor'
import BorderWidth from './BorderWidth'
import TextColors from './TextColors'

const BorderStyles = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BorderStylesTitle} span={borderStyleSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <CustomBorder />
                        <BorderColor />
                        <BorderWidth />
                        <TextColors />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BorderStyles