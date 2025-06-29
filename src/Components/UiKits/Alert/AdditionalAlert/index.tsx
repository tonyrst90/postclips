import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { AdditionalAlertTitle } from '@/Constant';
import { additionalAlertData, additionalAlertSubTitle } from '@/Data/UiKits/Alert';
import React from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap'

const AdditionalAlert = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AdditionalAlertTitle} span={additionalAlertSubTitle} />
                <CardBody className='dark-alert'>
                    {additionalAlertData && additionalAlertData.map((item, index) => (
                        <Alert color='' className={`bg-light-${item.class}`} key={index}>
                            <h3 className={`alert-heading pb-2 txt-${item.class}`} >{item.head}</h3>
                            <p>{item.text}</p>
                            <hr />
                            <p className="mb-0">{item.subtext}</p>
                        </Alert>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default AdditionalAlert;