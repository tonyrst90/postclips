import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { TextColorTitle } from '@/Constant';
import { textColorData, textColorSubTitle } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColor = () => {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={TextColorTitle} span={textColorSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        {textColorData && textColorData.map((item, index) => (
                            <p key={index} className={`mb-0 txt-${item.class}`}>{item.text}<code>{`.txt-${item.class}`}</code> {'class.'}</p>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default TextColor;