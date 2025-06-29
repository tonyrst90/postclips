import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, LinkColorTitle } from '@/Constant';
import { alertColorData, linkColorSubTitle } from '@/Data/UiKits/Alert';
import React, { Fragment } from 'react'
import { Alert, Card, CardBody, Col, Row } from 'reactstrap'

const LinkDarkColor = () => {
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={LinkColorTitle} span={linkColorSubTitle} />
                <CardBody>
                    <Row>
                        {alertColorData && alertColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <p className="mb-0">{item.text}</p>
                                        <Alert color={item.class} className='dark'>
                                            <p className={item.class === 'light' ? 'txt-dark' : ''}>{'This is a '}
                                                <a className={`alert-link ${item.class !== 'light' ? 'text-white' : ''}`} href={Href}>
                                                    {item.alertText}
                                                </a> {'with an example link.Check it out.'}
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
export default LinkDarkColor;