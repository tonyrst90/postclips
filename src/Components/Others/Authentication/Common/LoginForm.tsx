/* eslint-disable @next/next/no-img-element */
import { CreateAccount, DontHaveAccount, EmailAddressLogIn, ForgotPassword, ImagePath, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@/Constant";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { OtherWay } from "./OtherWay";
import { LoginFormType, LoginSubmitProp } from "@/Types/Auth.type";
import { validationSchema } from "@/Data/Pages/Pages";

export const LoginForm: React.FC<LoginFormType> = ({ password, logoClass, validation }) => {
  const [show, setShow] = useState(false);
  const submitHandler = (values: LoginSubmitProp, { resetForm }: { resetForm: () => void }) => resetForm();

  return (
    <div>
      <div>
        <Link className={`logo ${logoClass ? logoClass : ""}`} href="/dashboard/default">
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage" />
        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submitHandler} validationSchema={validation && validationSchema}>
          {() => (
            <Form className="theme-form">
              <h4>{SignInToAccount}</h4>
              <p>Enter your email & password to login</p>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{EmailAddressLogIn}</Label>
                <Field className="form-control" name="email" type="text" placeholder="Test@gmail.com" required />
                <ErrorMessage name="email" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{Password}</Label>
                <div className="position-relative">
                  <Field className="form-control" type={show ? "text" : "password"} name="password" required placeholder="*********" />
                  <div className="show-hide" onClick={() => setShow(!show)}><span className="show"> </span></div>
                </div>
                <ErrorMessage name="password" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="form-group mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                </div>
                {password && (<Link className="link" href="/others/authentication/forgetpassword">{ForgotPassword}?</Link>)}
                <div className="text-end mt-3"><Button color="primary" block className="w-100">{SignIn}</Button></div>
              </FormGroup>
              <h6 className="text-muted mt-4 or">{OrSignInWith} xxxx</h6>
              {/* <OtherWay /> */}
              <p className="mt-4 mb-0 text-center">{DontHaveAccount}<Link className="ms-2" href="/others/authentication/registersimple">{CreateAccount}</Link></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};