import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { OutlinedTouchspinTitle } from '@/Constant';
import { defaultTouchspinData, touchspinSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonTouchspin from '../Common/CommonTouchspin';

const OutlinedTouchspin = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={OutlinedTouchspinTitle} span={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} color={data} outline={true} btnClass={`spin-border-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default OutlinedTouchspin;