import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DisplayHeadingTitle } from '@/Constant';
import { displayHeadingList, displayHeadingSubTitle } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const DisplayHeading = () => {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' tagClass='mb-0' title={DisplayHeadingTitle} span={displayHeadingSubTitle} />
                <CardBody className='d-flex flex-column gap-2'>
                    {displayHeadingList.map((item, index) => (
                        <h1 className={`display-${item}`} key={index}>{`Display ${item}`}</h1>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default DisplayHeading;