import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DefaultTouchspinTitle } from '@/Constant';
import { defaultTouchspinData, touchspinSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonTouchspin from '../Common/CommonTouchspin';

const DefaultTouchspin = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultTouchspinTitle} span={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data, index) => (
                        <CommonTouchspin key={index} color={data} btnClass={`touchspin-${data}`} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default DefaultTouchspin;