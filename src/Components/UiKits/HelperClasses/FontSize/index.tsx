import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FontSizeTitle } from '@/Constant';
import { fontSizeData, fontSizeSubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontSize = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FontSizeTitle} span={fontSizeSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {fontSizeData && fontSizeData.map((item, index) => (
                            <div className="font-wrapper border" key={index}>
                                <div className={`f-${item}`}>{'Font-size' } {`.f-${item}`}</div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontSize;