import { Add, AddLabel, Cancel } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setModal } from '@/Redux/Reducers/LetterBoxSlice';
import React from 'react'
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

const AddLabelModal = () => {
    const dispatch = useAppDispatch();
    const { modal } = useAppSelector((state) => state.letterbox);

    return (
        <Modal isOpen={modal} toggle={() => dispatch(setModal(false))} size="lg">
            <ModalHeader toggle={() => dispatch(setModal(false))} className="fs-5">{AddLabel}</ModalHeader>
            <ModalBody>
                <Form>
                    <Row className="g-sm-3 g-2 custom-input">
                        <Col sm={2}><Label className='col-form-label'>{"Label Name :"}</Label></Col>
                        <Col sm={10}><Input type="text" /></Col>
                        <Col sm={2}><Label className='col-form-label'>{"Email :"}</Label></Col>
                        <Col sm={10}><Input type="email" /></Col>
                        <Col sm={2}><Label>{"Label Color :"}</Label></Col>
                        <Col sm={2} xs={2}><Input value="#003FDD" type="color" title="Choose your color" className='form-control-color' /></Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color='light' onClick={() => dispatch(setModal(false))}>{Cancel}</Button>
                <Button color='primary' onClick={() => dispatch(setModal(false))}>{Add}</Button>
            </ModalFooter>
        </Modal>
    )
}
export default AddLabelModal;