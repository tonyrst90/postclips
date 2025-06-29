'use client'
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateCampaignWizard from './CreateCampaignWizard';
import CreateCampaignStates from './CreateCampaignStates';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';

const AddProductContainer = () => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card className='mt-5'>
                            <CardBody>
                                <Row className="g-xl-5 g-3">
                                    <CreateCampaignWizard />
                                    <CommonCardHeader title={"Campaign Details"} />
                                    <CreateCampaignStates steps={steps} activeCallBack={activeCallBack} />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddProductContainer;