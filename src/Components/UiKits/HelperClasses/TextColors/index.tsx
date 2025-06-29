import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { TextColorsBig } from '@/Constant';
import { borderColorData, textColorSubTitle } from '@/Data/UiKits/HelperClasses';
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColors = () => {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={TextColorsBig} span={textColorSubTitle} />
                <CardBody>
                    {borderColorData && borderColorData.slice(0, 7).map((item, index) => (
                        <Fragment key={index}>
                            <div className="helper-common-box"></div>
                            <div className={`font-${item.color}`}>
                                {'This is a '} <strong>{`font-${item.color}`}</strong> {`text used class as .font-${item.color}`}
                            </div>
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default TextColors;