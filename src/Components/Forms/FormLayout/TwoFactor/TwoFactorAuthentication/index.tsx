import { FactorAuthentication, ImagePath, TwoFactorAuthenticationTitle } from '@/Constant';
import Image from 'next/image';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import FirstModal from './FirstModal';

const TwoFactorAuthentication = () => {
    const [modalOne, setModalOne] = useState(false);
    const toggle = () => setModalOne(!modalOne);
    return (
        <Col sm={12}>
            <Card>
                <CardBody className="authentication-body">
                    <div className="authentication-wrapper">
                        <h4>{TwoFactorAuthenticationTitle}</h4>
                        <p>{"Click on the authentication button below and scan the QR code"}</p>
                        <Image src={`${ImagePath}/forms/qr-scan.png`} width={481} height={420} alt="qr-scan" />
                    </div>
                    <Button color='primary' className="mt-5" onClick={toggle}>{FactorAuthentication}</Button>
                    <FirstModal toggle={toggle} modalOne={modalOne} />
                </CardBody>
            </Card>
        </Col>
    );
};
export default TwoFactorAuthentication;