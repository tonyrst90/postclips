import { ImagePath, Submit } from '@/Constant';
import { SecondModalProps } from '@/Types/Forms.type';
import Image from 'next/image';
import React, { useState } from 'react'
import { Alert, Button, Form, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

const SecondModal: React.FC<SecondModalProps> = ({ modal2, toggle2 }) => {
    const [active, setActive] = useState(true);

    return (
        <Modal centered isOpen={modal2} toggle={toggle2}>
            <ModalHeader toggle={toggle2}>{'Scan QR code'}</ModalHeader>
            <ModalBody className="main-qr-code">
                <div className="modal-toggle-wrapper">
                    <p>{"Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below."}</p>
                    <div className="modal-img">
                        <div className="qr-img">
                            <Image src={`${ImagePath}/forms/qr-code.png`} width={100} height={100} alt="qr-code" />
                        </div>
                        <div className="qr-content">
                            <Alert color='light-dark' isOpen={active} toggle={() => setActive(!active)} className='light text-dark border-left-wrapper'>
                                <i className="fa fa-exclamation-triangle" />
                                <div>
                                    <span>{"If your qr code is not working then enter this code in your input field."}</span>
                                    <span className="f-w-500">{'TYU78DE29OLAAWCVNTYFGESWQ31098QW'}</span>
                                </div>
                            </Alert>
                        </div>
                    </div>
                    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
                        <Input type="text" required placeholder="Enter QR Code" />
                    </Form>
                    <Button color="primary">{Submit}</Button>
                </div>
            </ModalBody>
        </Modal>
    );
};
export default SecondModal;