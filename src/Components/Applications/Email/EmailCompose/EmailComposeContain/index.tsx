import React, { useCallback, useState } from 'react'
import { Card, Col, Row } from 'reactstrap';
import EmailTop from '../../Common/EmailTop';
import ReadEmailList from '../../Common/ReadEmailList';
import EmailComposeHeader from './EmailComposeHeader';

const EmailComposeContain = () => {
    const [activeTab, setActiveTab] = useState(1);
    const activeCallback = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);

    return (
        <div className="email-right-aside">
            <Card className="email-body">
                <Row>
                    <Col xl={4} md={12} className="box-md-12 pr-0">
                        <div className="pe-0" />
                        <EmailTop />
                        <ReadEmailList activeTab={activeTab} activeCallback={activeCallback} />
                    </Col>
                    <Col xl={8} md={12} className="box-md-12 pl-0">
                        <EmailComposeHeader />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default EmailComposeContain;