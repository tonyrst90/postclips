import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { RoundedTouchspinTitle } from '@/Constant';
import { defaultTouchspinData, touchspinSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonTouchspin from '../Common/CommonTouchspin';

const RoundedTouchspin = () => {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RoundedTouchspinTitle} span={touchspinSubTitle} />
                <CardBody className="common-flex rounded-touchspin">
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} arrowIcon={true} color={data} btnClass={`touchspin-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default RoundedTouchspin;