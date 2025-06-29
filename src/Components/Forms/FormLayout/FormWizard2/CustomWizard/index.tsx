import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan';
import { CustomWizardFormProps } from '@/Types/Forms.type';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CustomNavComponent from './CustomNavComponent';
import CustomTabContent from './CustomTabContent';

const CustomWizard: React.FC<CustomWizardFormProps> = ({ title, divClass, navColClass, tabColClass,differentId }) => {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan smallHeading={title} />
                <CardBody>
                    <div className={`horizontal-wizard-wrapper ${divClass ? divClass : ''}`}>
                        <Row className="g-3">
                            <div className={`main-horizontal-header ${navColClass}`}>
                                <CustomNavComponent activeCallBack={activeCallBack} steps={steps} />
                            </div>
                            <div className={tabColClass}>
                                <CustomTabContent activeCallBack={activeCallBack} steps={steps} differentId={differentId}/>
                            </div>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomWizard