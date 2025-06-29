import { Form } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { RegisterWizardList } from "./RegisterWizadList";
import PersonalForm from "./PersonalForm";
import AddressForm from "./AddressForm";
import MessageForm from "./MessageForm";
import DoneForm from "./DoneForm";
import { ChangeEvent, useState } from "react";
import ShowError from "../common/ShowError";
import { RegisterWizardButtons } from "./RegisterWizardButtons";

export const RegisterWizardForm = () => {
  const [formValue, setFormValue] = useState({ firstName: "", lastName: "", contactNumber: "", email: "", password: "", confirmPassword: "", birthDate: "", age: "", passPort: "", country: "", state: "", city: "" });
  const [showFinish, setShowFinish] = useState(false);
  const [level, setLevel] = useState(1);

  const handleBackButton = () => {
    setShowFinish(false);
    if (level === 2) setLevel(level - 1);
    if (level === 3) setLevel(level - 1);
    if (level === 4) setLevel(level - 1);
  };

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleNextButton = () => {
    const { firstName, lastName, contactNumber, email, password, confirmPassword, birthDate, age, passPort, country, state, city } = formValue;
    if (firstName !== "" && lastName !== "" && contactNumber !== "" && level === 1) setLevel(level + 1);
    else if (email !== "" && password !== "" && confirmPassword !== "" && level === 2) setLevel(level + 1)
    else if (birthDate !== "" && age !== "" && passPort !== "" && level === 3) setLevel(level + 1);
    else if (country !== "" && state !== "" && city !== "" && level === 4) {
      setLevel(level)
      setShowFinish(true)
    }
    else ShowError();
  };

  return (
    <Form className="theme-form">
      <div className="wizard-4" id="wizard">
        <RegisterWizardList level={level} />
        <div className="step-container login-card">
          {level === 1 && <PersonalForm formValue={formValue} getUserData={getUserData} />}
          {level === 2 && <AddressForm formValue={formValue} getUserData={getUserData} />}
          {level === 3 && <MessageForm formValue={formValue} getUserData={getUserData} />}
          {level === 4 && <DoneForm formValue={formValue} getUserData={getUserData} />}
        </div>
        <RegisterWizardButtons showFinish={showFinish} level={level} handleBackButton={handleBackButton} handleNextButton={handleNextButton} formValue={formValue} />
      </div>
      <ToastContainer />
    </Form>
  );
};