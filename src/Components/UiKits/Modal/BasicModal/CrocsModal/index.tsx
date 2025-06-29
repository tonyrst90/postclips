import { CrocsSignUp, OpenModalCrocs } from '@/Constant';
import React, { useState } from 'react'
import { Button, Modal, ModalHeader } from 'reactstrap';
import CrocsModalForm from './CrocsModalForm';

const CrocsModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    return (
        <>
            <Button color='primary' onClick={toggle}>{OpenModalCrocs}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <ModalHeader className="justify-content-center border-0">{CrocsSignUp}</ModalHeader>
                    <CrocsModalForm />
                </div>
            </Modal>
        </>
    )
}
export default CrocsModal;