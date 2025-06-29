import { Add, Cancel, CategoryName, CreateNewCategory } from '@/Constant';
import React, { useState } from 'react'
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ToolbarBox from '../Common/ToolbarBox';

const NewCategoryModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <Col xs={12}>
            <div className="category-buton">
                <Button className='button-primary' color='transparent' onClick={toggle}><i className="me-2 fa fa-plus" /> {CreateNewCategory} </Button>
            </div>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{CreateNewCategory}</ModalHeader>
                <ModalBody className="custom-input">
                    <div className="create-category">
                        <div>
                            <Label>{CategoryName} <span className="txt-danger">{"*"}</span></Label>
                            <Input className="m-0" type="text" required />
                            <ToolbarBox paragraph={"Improve product visibility by adding a compelling description."} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="light" onClick={toggle}>{Cancel}</Button>
                    <Button color="primary" onClick={toggle}>{Add}</Button>
                </ModalFooter>
            </Modal>
        </Col>
    )
}
export default NewCategoryModal