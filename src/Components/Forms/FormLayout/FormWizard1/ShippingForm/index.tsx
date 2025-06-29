import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ShippingFormTitle } from '@/Constant';
import { shippingFormSubTitle } from '@/Data/Forms/FormLayout';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import ShippingFormNav from './ShippingFormNav';
import BillingForm from './BillingForm';
import ShippingFormContent from './ShippingFormContent';
import PaymentForm from './PaymentForm';
import FinishForm from './FinishForm';
import CurrentCart from './CurrentCart';

const ShippingForm = () => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ShippingFormTitle} span={shippingFormSubTitle} />
                <CardBody>
                    <Row className="shopping-wizard">
                        <Col xs={12}>
                            <Row className="shipping-form g-5">
                                <Col xl={8} className="shipping-border">
                                    <ShippingFormNav activeCallBack={activeCallBack} steps={steps} />
                                    <TabContent className="dark-field shipping-content" activeTab={steps}>
                                        <TabPane tabId={1}>
                                            <BillingForm activeCallBack={activeCallBack} />
                                        </TabPane>
                                        <TabPane tabId={2} className="shipping-wizard">
                                            <ShippingFormContent activeCallBack={activeCallBack} />
                                        </TabPane>
                                        <TabPane tabId={3} className='shipping-wizard'>
                                            <PaymentForm activeCallBack={activeCallBack} />
                                        </TabPane>
                                        <TabPane tabId={4} className="shipping-wizard finish-wizard1">
                                            <FinishForm />
                                        </TabPane>
                                    </TabContent>
                                </Col>
                                <CurrentCart />
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ShippingForm