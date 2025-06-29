import { TagModalProps } from '@/Types/Bookmark.type'
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const TagModal: React.FC<TagModalProps> = ({ showModal, modalToggle }) => {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{'Create Tag'}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row className="g-2">
                        <Col md={12}>
                            <FormGroup className="mt-0">
                                <Label>{'Tag Name'}</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup className="mt-0">
                                <Label>{'Tag color'}</Label>
                                <Input className="form-control-color d-block" type="color" value='#003FDD' required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color='secondary' className='me-2' onClick={modalToggle}>{'Save'}</Button>
                    <Button color='primary' onClick={modalToggle}>{'Cancel'}</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default TagModal;