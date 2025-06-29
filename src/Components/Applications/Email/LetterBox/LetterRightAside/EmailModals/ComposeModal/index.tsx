import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ToggleComponent from "./ToggleComponent";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { AddNewEmailInterFace } from "@/Types/Email.type";
import { addNewEmail, setComposeEmail, setEmailValidation } from "@/Redux/Reducers/LetterBoxSlice";
import { ComposeMessage, SaveDraft, Send } from "@/Constant";

const ComposeModal = () => {
  const [ccShow, setCcShow] = useState(false);
  const [bccShow, setBccShow] = useState(false);
  const { composeEmail, emailValidation } = useAppSelector((state) => state.letterbox);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddNewEmailInterFace>();
  const onSubmit: SubmitHandler<AddNewEmailInterFace> = (data) => {
    dispatch(addNewEmail(data));
    dispatch(setEmailValidation(false));
    dispatch(setComposeEmail(false));
    reset();
  };
  return (
    <Modal isOpen={composeEmail} size="lg" id="compose_mail">
      <ModalHeader toggle={() => dispatch(setComposeEmail(false))}>{ComposeMessage}</ModalHeader>
      <ModalBody className="compose-modal">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" htmlFor="composeFrom" check>
                  {"From"} :
                </Label>
              </Col>
              <Col sm={10}>
                <Input id="composeFrom" type="email" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" htmlFor="composeTo" check>
                  {"To"} :
                </Label>
              </Col>
              <Col sm={10}>
                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid" : "is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off" />
                <div className="add-bcc">
                  <div className="d-flex gap-2">
                    <Button color="transparent" onClick={() => setCcShow(!ccShow)}>
                      {" "}
                      {"Cc"}
                    </Button>
                    <Button color="transparent" onClick={() => setBccShow(!bccShow)}>
                      {" "}
                      {"Bcc"}{" "}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
          <ToggleComponent ccShow={ccShow} bccShow={bccShow} />
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" htmlFor="composeSubject" check>
                  {"Subject"} :
                </Label>
              </Col>
              <Col sm={10}>
                <input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid" : "is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off" />
              </Col>
            </Row>
          </FormGroup>
          <div className="toolbar-box">
            <div id="editor">
              <CKEditor editor={ClassicEditor} data="Enter Your Messages.." />
            </div>
          </div>
          <ModalFooter>
            <Button color="light" onClick={() => dispatch(setComposeEmail(false))}>
              {SaveDraft}
            </Button>
            <Button color="primary" type="submit" onClick={() => dispatch(setEmailValidation(true))}>
              {" "}
              {Send}{" "}
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ComposeModal;
