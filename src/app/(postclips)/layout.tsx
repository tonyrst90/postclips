"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { RootLayoutProps } from "@/Types/Layout.type";
import TapTop from "@/Layout/TapTop";
import Footer from "@/Layout/Footer/Footer";
import { SideBar } from "@/Layout/Sidebar/Sidebar";
import Header from "@/Layout/Header/Header";
import ThemeCustomizer from "@/Layout/ThemeCustomizer/ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/Layout/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import { useMobile } from "@/Hooks/useMobile";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { mobile } = useMobile();

  return (
    <div className="page-wrapper">
      <SideBar />

      <div className="d-flex flex-column flex-grow-1 w-100 pt-5">
        <Header />
        <div className={`page-body-wrapper`}>
          <SideBar />
          <div className="page-body ">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )

  // return (
  //   <>
  //     <div className={`page-wrapper ${layout}`} id="pageWrapper">
  //       <SideBar />
  //       <div className={`page-body-wrapper`}>
  //         <Header />
  //         <div className="page-body ">{children}</div>
  //         {/* <Footer /> */}
  //       </div>
  //     </div>
  //     <TapTop />
  //   </>
  // );
};
export default RootLayout;
