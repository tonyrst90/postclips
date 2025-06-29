import React, { ChangeEvent, useState } from 'react'
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { FirstModalProps } from '@/Types/Forms.type';
import { modalOneData } from '@/Data/Forms/FormLayout';
import { Cancel, Next } from '@/Constant';
import SecondModal from './SecondModal';

const FirstModal: React.FC<FirstModalProps> = ({ toggle, modalOne }) => {
    const [selectAuthenticator, setSelectAuthenticator] = useState("");
    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);
    const getValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setSelectAuthenticator(value);
    };
    const handleNextButton = () => {
        if (selectAuthenticator !== "") {
            toggle2();
            toggle();
        } else {
            return toast.error("please fill all field after press next button");
        }
    };
    return (
        <>
            <Modal centered isOpen={modalOne} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Two-factor authentication'}</ModalHeader>
                <ModalBody>
                    <div className="modal-toggle-wrapper">
                        <p>{"To log into your account, youll also need to enter your username, password, and a code that was sent to you through SMS or an app."}</p>
                        <div className="authentication-options">
                            <FormGroup check className="radio radio-primary ps-0">
                                <ul className="radio-wrapper">
                                    {modalOneData.map((data, index) => (
                                        <li key={index}>
                                            <Input onChange={getValue} id={data.title} type="radio" name="selectAuthenticatorMethodName" checked={selectAuthenticator === data.title} value={data.title} />
                                            <Label className="mb-0" htmlFor={data.title} check>
                                                <i className={`fa ${data.icon}`} />
                                                <span className="d-flex flex-column"><span>{data.title}</span><span>{data.description}</span></span>
                                            </Label>
                                        </li>
                                    ))}
                                </ul>
                            </FormGroup>
                        </div>
                        <Button color="dark" className="rounded-pill w-100 mt-3" onClick={handleNextButton}>{Next}</Button>
                        <Button color='transparent' className="rounded-pill w-100 pb-0 dark-toggle-btn" onClick={toggle}>{Cancel}</Button>
                    </div>
                </ModalBody>
            </Modal>
            <SecondModal modal2={modal2} toggle2={toggle2} />
        </>
    );
};
export default FirstModal;