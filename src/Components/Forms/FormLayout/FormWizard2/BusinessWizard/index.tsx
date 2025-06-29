import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan';
import { CustomWizardFormProps } from '@/Types/Forms.type';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import BusinessNavComponent from './BusinessNavComponent';
import BusinessTabContent from './BusinessTabContent';

const BusinessWizard: React.FC<CustomWizardFormProps> = ({ title, divClass, navColClass, tabColClass }) => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan smallHeading={title} />
                <CardBody>
                    <div className={`horizontal-wizard-wrapper vertical-variations ${divClass ? divClass : ''}`}>
                        <Row className="g-3">
                            <div className={`main-horizontal-header ${navColClass}`}>
                                <BusinessNavComponent activeCallBack={activeCallBack} steps={steps} />
                            </div>
                            <div className={tabColClass}>
                                <BusinessTabContent steps={steps} activeCallBack={activeCallBack} />
                            </div>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default BusinessWizard