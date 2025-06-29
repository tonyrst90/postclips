import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VariationCheckboxTitle } from '@/Constant'
import { variationCheckBoxSubTitle } from '@/Data/Forms/FormControls'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import VariationActivities from './VariationActivities'
import VariationCheckboxUpgrade from './VariationCheckboxUpgrade'

const VariationCheckbox = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VariationCheckboxTitle} span={variationCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <VariationActivities />
                        <VariationCheckboxUpgrade />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default VariationCheckbox