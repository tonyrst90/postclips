import { BottomRightToasts } from "@/Constant";
import { useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";

const BottomRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Button color="secondary" onClick={toggle}>{BottomRightToasts}</Button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="d-flex justify-content-between alert-secondary align-items-center">
            <ToastBody>Your time over after 5 minute.</ToastBody>
            <Button close className="btn-close-white me-2 m-auto" onClick={()=>setOpen(false)}></Button>
          </div>
        </Toast>
      </div>
    </>
  );
};

export default BottomRightToast;
