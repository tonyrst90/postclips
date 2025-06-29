import { AgeWizard, BirthdayWizard, HavePassport, SignUpToAccount } from "@/Constant";
import { RegisterWizardForm } from "@/Types/Auth.type";
import { FormGroup, Input, Label } from "reactstrap";

const MessageForm: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { birthDate, age, passPort } = formValue

  return (
    <div id="step-3" className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{'Enter your email & password to login'}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="mb-3">
            <Label htmlFor="exampleFormControlInput1" check>{BirthdayWizard}</Label>
            <Input onChange={getUserData} value={birthDate} type="date" name="birthDate" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label className="control-label" check>{AgeWizard}</Label>
            <Input onChange={getUserData} value={age} placeholder="Age" type="text" name="age" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label className="control-label" check>{HavePassport}</Label>
            <Input onChange={getUserData} value={passPort} placeholder="Yes/No" type="text" name="passPort" />
          </FormGroup>
        </div>
      </div>
    </div>
  )
};

export default MessageForm;