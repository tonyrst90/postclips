"use client";
import UserForm from "@/Components/Auth/UserForm";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

const UserLogin = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-page__left">
          <div className="login-page__center-content">
            <UserForm />
          </div>
        </div>
        <div className="login-page__right">
          <Image
            src="/assets/images/(postclips)/login/img.svg"
            alt="PostClips Demo"
            fill
            className="next-image-full"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default UserLogin;