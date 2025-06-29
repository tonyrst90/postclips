import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import EditForm from './EditForm';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setEditModal } from '@/Redux/Reducers/BookmarkSlice';

const EditBookmarkModal = () => {
    const dispatch = useAppDispatch();
    const { editModal } = useAppSelector((state) => state.bookmark);
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    return (
        <Modal isOpen={editModal} toggle={editToggle} size='lg'>
            <ModalHeader toggle={editToggle}> {'Edit Bookmark'}</ModalHeader>
            <ModalBody>
                <EditForm editToggle={editToggle} />
            </ModalBody>
        </Modal>
    )
}
export default EditBookmarkModal;