import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BorderColorTitle } from '@/Constant';
import { borderColorSubTitle, borderSideColorData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BorderColor = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BorderColorTitle} span={borderColorSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {borderSideColorData && borderSideColorData.map((item, index) => (
                            <div className="helper-common-box" key={index}>
                                <div className={`helper-box ${item} border fill-wrapper`} /><span>{`.${item}`}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BorderColor;