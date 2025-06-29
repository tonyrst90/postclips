"use client";
import Error403Container from "@/Components/Others/Error/Error403";
import { SessionProvider } from "@/Providers/SessionProvider";
import Store from "@/Redux/Store";
import { RootLayoutProps } from "@/Types/Layout.type";
import React, { ErrorInfo } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

// interface ErrorBoundaryState {
//   hasError: boolean;
// }

// class ErrorBoundary extends React.Component<RootLayoutProps, ErrorBoundaryState> {
//   constructor(props: RootLayoutProps) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: Error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     if (error.message.includes("ToastContainer")) {
//       return;
//     }
//     console.error("Uncaught error:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <Error403Container />
//     }

//     return this.props.children;
//   }
// }

const MainProvider: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Provider store={Store}>
      <SessionProvider>
        {/* <ErrorBoundary>{children}</ErrorBoundary> */}
        {children}
      </SessionProvider>
      <ToastContainer />
    </Provider>
  );
};

export default MainProvider;