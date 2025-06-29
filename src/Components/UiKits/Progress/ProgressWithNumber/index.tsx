import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ProgressWithNumberTitle } from '@/Constant';
import { progressNumberSubTitle } from '@/Data/UiKits/Progress';
import React from 'react'
import { Button, Card, CardBody, Col, Progress } from 'reactstrap'

const ProgressWithNumber = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ProgressWithNumberTitle} span={progressNumberSubTitle} />
                <CardBody>
                    <div className="position-relative m-4 progress-number">
                        <Progress className="progress-wrapper" value={50} />
                        <Button color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-circle p-0">{'1'}</Button>
                        <Button color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-circle p-0">{'2'}</Button>
                        <Button color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle btn-sm rounded-circle p-0">{'3'}</Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ProgressWithNumber;