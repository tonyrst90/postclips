import { Button, Toast, ToastBody } from "reactstrap";
import Image from "next/image";
import { useState } from "react";
import { ImagePath, TopRightToasts } from "@/Constant";

const TopRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>{TopRightToasts}</Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast isOpen={open}>
          <div className="toast-header toast-img">
            <Image priority width={30} height={30} className="rounded me-2" src={`${ImagePath}/dashboard-8/profile.png`} alt="profile" />
            <strong className="me-auto">PostClips theme</strong>
            <small>5 min ago</small>
            <Button  close onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">{`Hello, I'm a web-designer.`}</ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopRightToast;
