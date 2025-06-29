import React, { useRef } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import  { useReactToPrint } from "react-to-print";
import { PrintModalProps } from "@/Types/Contact.type";
import { ImagePath, PrintPreview } from "@/Constant";
import Image from "next/image";

const PrintModal: React.FC<PrintModalProps> = ({ printModal, selectedUser, toggleCallback }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  const printModalToggle = () => {
    toggleCallback(false);
    handlePrint();
  };

  const closePrintModal = () => {
    toggleCallback(false);
  };
  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle} centered>
      <ModalHeader toggle={printModalToggle}>{PrintPreview}</ModalHeader>
      <ModalBody className="list-persons">
        <div className="profile-mail pt-0" ref={contentRef}>
          <div className="d-flex align-items-center">
            <Image className="img-100 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/2.png`} width={50} height={50} alt="" />
            <div className="flex-grow-1 mt-0">
              <h3>
                <span>{selectedUser.name}</span>
                <span>{selectedUser.surname}</span>
              </h3>
              <p>{selectedUser.email}</p>
            </div>
          </div>
          <div className="email-general">
            <h3>{"General"}</h3>
            <p>
              {"Email Address"} :
              <span className="font-primary" id="mailadd">
                {selectedUser.email}
              </span>
            </p>
          </div>
        </div>
        <Button color="secondary" className="me-1" onClick={printModalToggle}>
          {"Print"}
        </Button>
        <Button color="primary" onClick={closePrintModal}>
          {"Cancel"}
        </Button>
      </ModalBody>
    </Modal>
  );
};
export default PrintModal;
