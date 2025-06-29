import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Previous, VerticalValidationWizardTitle } from '@/Constant';
import { verticalValidationWizardSubTitle } from '@/Data/Forms/FormLayout';
import React, { ChangeEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import VerticalWizardNav from './VerticalWizardNav';
import YourInfoForm from './YourInfoForm';
import CartInfoForm from './CartInfoForm';
import NetBankingForm from './NetBankingForm';

const VerticalValidationWizard = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", contact: "", email: "", state: "", zip: "", recipientUserName: "", userName: "", cardNumber: "", expirationDate: "", cvvNumber: "", documentationName: "", bankName: "", feedBack: "", });
    const [steps, setSteps] = useState(1);
    const [showFinish, setShowFinish] = useState(false);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = name === "rememberNextTime" ? event.target.checked : name === "documentationName" ? event.target.files && event.target.files[0].name : event.target.value;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };
    const handleFinishButton = () => {
        return toast.success("Successfully Completed");
    };
    const handleNextButton = () => {
        const { firstName, lastName, contact, email, state, zip, recipientUserName, userName, cardNumber, expirationDate, cvvNumber, documentationName, bankName, feedBack, } = formData;
        if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && state !== "" && zip !== "" && steps === 1) {
            setSteps(2)
        } else if (recipientUserName !== "" && userName !== "" && cardNumber !== "" && expirationDate !== "" && cvvNumber !== "" && documentationName && steps === 2) {
            setSteps(3);
        } else if (bankName !== "" && feedBack !== "" && steps === 3) {
            setShowFinish(true);
        }
        else { return toast.error("please fill out all the fields before moving on to the next step"); }
    };
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VerticalValidationWizardTitle} span={verticalValidationWizardSubTitle} />
                <CardBody>
                    <div className="vertical-main-wizard">
                        <Row className="g-3">
                            <Col xxl={3} xl={4} xs={12}>
                                <VerticalWizardNav steps={steps} activeCallBack={activeCallBack} />
                            </Col>
                            <Col xxl={9} xl={8} xs={12}>
                                <TabContent activeTab={steps}>
                                    <TabPane tabId={1}>
                                        <YourInfoForm formData={formData} updateFormData={updateFormData} />
                                    </TabPane>
                                    <TabPane tabId={2}>
                                        <CartInfoForm formData={formData} updateFormData={updateFormData} />
                                    </TabPane>
                                    <TabPane tabId={3} className='custom-input'>
                                        <NetBankingForm formData={formData} updateFormData={updateFormData} />
                                    </TabPane>
                                </TabContent>
                                <Col xs={12} className="text-end">
                                    {steps === 2 && <Button onClick={() => activeCallBack(1)} color="primary" className='me-1'>{Previous}</Button>}
                                    <Button color={showFinish ? "success" : "primary"} onClick={showFinish ? handleFinishButton : handleNextButton}>{showFinish ? "Finish" : "Next"}</Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default VerticalValidationWizard