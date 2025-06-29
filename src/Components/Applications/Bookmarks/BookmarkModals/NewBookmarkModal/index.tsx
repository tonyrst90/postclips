import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import ModalForm from './ModalForm'
import { NewBookmarkModalProps } from '@/Types/Bookmark.type'

const NewBookmarkModal: React.FC<NewBookmarkModalProps> = ({ showModal, modalToggle, addCallback }) => {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{'Add Bookmark'}</ModalHeader>
            <ModalBody>
                <ModalForm addCallback={addCallback} modalToggle={modalToggle} />
            </ModalBody>
        </Modal>
    )
}
export default NewBookmarkModal;