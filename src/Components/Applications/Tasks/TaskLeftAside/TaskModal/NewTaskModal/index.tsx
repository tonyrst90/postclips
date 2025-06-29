import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { NewTaskTitle } from '@/Constant';
import NewTaskForm from './NewTaskForm';

const NewTaskModal = () => {
    const [addModal, setAddModal] = useState(false);
    const toggle = () => setAddModal(!addModal);

    return (
        <>
            <Button color='transparent' block className="badge-light-primary txt-primary btn-mail w-100" onClick={toggle}><CheckCircle className="me-2" />{NewTaskTitle}</Button>
            <Modal className="modal-bookmark" size="lg" isOpen={addModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Task'}</ModalHeader>
                <ModalBody>
                    <NewTaskForm setAddModal={setAddModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}
export default NewTaskModal;