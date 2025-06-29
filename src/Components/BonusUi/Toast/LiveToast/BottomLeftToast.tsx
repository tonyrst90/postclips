import { BottomLeftToasts, ImagePath, ImNotSure, RemoveMyAccount } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";

const BottomLeftToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Button color="success" onClick={toggle}>{BottomLeftToasts}</Button>
      <div className="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <Image priority width={30} height={30} className="rounded me-2" src={`${ImagePath}/dashboard-8/profile.png`} alt="profile" />
            <strong className="me-auto">PostClips theme</strong>
            <Button close onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">
            <h6 className="mb-2">{'Your account will be permanently deleted?'}</h6>
            <p className="mb-0">Do you intend to continue?</p>
            <div className="mt-2 pt-2 border-top d-flex gap-2">
              <Button color="dark" size="sm">{ImNotSure}</Button>
              <Button color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Button>
            </div>
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default BottomLeftToast;
