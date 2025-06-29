import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FontStyleTitle } from '@/Constant';
import { fontStyleData, fontStyleSubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontStyle = () => {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={FontStyleTitle} span={fontStyleSubTitle} />
                <CardBody>
                    {fontStyleData && fontStyleData.map((item, index) => (
                        <p className={`f-s-${item}`} key={index}>
                            {'This is a '} <strong>{`.f-s-${item}`}</strong> {'font-style'}
                        </p>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontStyle;