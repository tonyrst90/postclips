import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

const CategoryModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color='transparent' className="btn-category" onClick={toggle}><span className="title">{'+ Add Category'}</span></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Category'}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark">
                        <Row className="g-2">
                            <Col md={12}>
                                <FormGroup>
                                    <Input type="text" required placeholder="Enter category name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color='secondary' className='me-2' onClick={toggle}>{'Save'}</Button>
                        <Button color='primary' onClick={toggle}>{'Cancel'}</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
export default CategoryModal;