/* eslint-disable @next/next/no-img-element */
import { AgreeWithSignUp, AlreadyHaveAnAccount, AuthSignIn, CreateAccount, CreateYourAccount, EmailAddressSignUp, EnterYourPersonalDetailsToCreateAccount, Href, ImagePath, OrSignUpWith, PasswordSignUp, PrivacyPolicy, YourNameSignUp } from "@/Constant";
import { SignupProp, SignupSubmitProp } from "@/Types/Auth.type";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { OtherWay } from "./OtherWay";

export const RegisterForm: React.FC<SignupProp> = ({ logoClass }) => {
  const [show, setShow] = useState(false);
  const submitHandler = (values: SignupSubmitProp, { resetForm }: { resetForm: () => void }) => resetForm();

  return (
    <div>
      <div>
        <Link className={`logo ${logoClass}`} href="/dashboard/default">
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage" />
        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ firstname: "", lastname: "", email: "", password: "" }} onSubmit={submitHandler}>
          {() => (
            <Form className="theme-form">
              <h4>{CreateYourAccount}</h4>
              <p>{EnterYourPersonalDetailsToCreateAccount}</p>
              <FormGroup>
                <Label className="pt-0 col-form-label">{YourNameSignUp}</Label>
                <Row className="g-2">
                  <Col sm={6}>
                    <Field className="form-control" type="text" name="firstname" required placeholder="First name" />
                  </Col>
                  <Col sm={6}>
                    <Field className="form-control" type="text" name="lastname" required placeholder="Last name" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{EmailAddressSignUp}</Label>
                <Field name="email" type="email" className="form-control" required placeholder="Test@gmail.com" />
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{PasswordSignUp}</Label>
                <div className="position-relative">
                  <Field className="form-control" name="password" type={show ? "text" : "password"} required placeholder="*********" />
                  <div className="show-hide" onClick={() => setShow(!show)}><span className="show"></span></div>
                </div>
              </FormGroup>
              <FormGroup className="mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" htmlFor="checkbox1">{AgreeWithSignUp}<Link className="ms-2" href={Href}>{PrivacyPolicy}</Link></Label>
                </div>
                <Button block color="primary" className="w-100">{CreateAccount}</Button>
              </FormGroup>
              <h6 className="text-muted mt-4 or">{OrSignUpWith}</h6>
              <OtherWay />
              <p className="mt-4 mb-0 text-center">{AlreadyHaveAnAccount}<Link className="ms-2" href="/others/authentication/loginsimple">{AuthSignIn}</Link></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};