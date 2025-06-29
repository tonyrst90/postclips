import { TagModalProps } from '@/Types/Tasks.type';
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const TagModal: React.FC<TagModalProps> = ({ tagModal, tagToggle }) => {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
            <ModalHeader toggle={tagToggle}>{'Create Tag'}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row>
                        <Col md={12}>
                            <FormGroup className='mt-0'>
                                <Label>{'Tag Name'}</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col md={12} className='mt-0'>
                            <Label>{'Tag Color'}</Label>
                            <Input className="form-control-color d-block" type="color" value='#003FDD' />
                        </Col>
                    </Row>
                    <Button color='secondary' className='me-2' onClick={tagToggle}>{'Save'}</Button>
                    <Button color='primary' onClick={tagToggle}>{'Cancel'}</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default TagModal;