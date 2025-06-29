import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FontWeightTitle } from '@/Constant';
import { fontWeightData, fontWeightSubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontWeight = () => {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={FontWeightTitle} span={fontWeightSubTitle} />
                <CardBody>
                    {fontWeightData && fontWeightData.map((item, index) => (
                        <div className="helper-common-box" key={index}>
                            <div className={`f-w-${item.class}`}>{item.text}</div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontWeight;