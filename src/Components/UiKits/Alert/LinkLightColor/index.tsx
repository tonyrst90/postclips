import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, LinkLightColorTitle } from '@/Constant';
import { alertLightColorData, linkLightSubTitle } from '@/Data/UiKits/Alert';
import React, { Fragment } from 'react'
import { Alert, Card, CardBody, Col, Row } from 'reactstrap'

const LinkLightColor = () => {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={LinkLightColorTitle} span={linkLightSubTitle} />
                <CardBody>
                    <Row>
                        {alertLightColorData && alertLightColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <p className="mb-0">{item.text}</p>
                                        <Alert color={item.class}>
                                            <p className={`txt-${item.textClass}`}>{'This is a '}
                                                <a className={`alert-link txt-${item.textClass}`} href={Href}>
                                                    {item.alertText}
                                                </a> {' with an example link. Check it out.'}
                                            </p>
                                        </Alert>
                                    </Fragment>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default LinkLightColor;