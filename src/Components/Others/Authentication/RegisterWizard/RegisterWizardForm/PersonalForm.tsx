import { FormGroup, Input, Label } from "reactstrap";
import { RegisterWizardForm } from "@/Types/Auth.type";
import { ContactNameWizard, ContactNameWizardPlaceholder, FirstNameWizard, FirstNameWizardPlaceholder, LastNameWizard, LastNameWizardPlaceholder, SignUpToAccount } from "@/Constant";

const PersonalForm: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { contactNumber, lastName, firstName } = formValue;

  return (
    <div id="step-1" className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{'Enter your email & password to login'}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="mb-3">
            <Label htmlFor="name" check>{FirstNameWizard}</Label>
            <Input value={firstName} name="firstName" onChange={getUserData} id="name" type="text" placeholder={FirstNameWizardPlaceholder} required />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label htmlFor="lname" check>{LastNameWizard}</Label>
            <Input value={lastName} name="lastName" onChange={getUserData} id="lname" type="text" placeholder={LastNameWizardPlaceholder} />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label htmlFor="contact" check>{ContactNameWizard}</Label>
            <Input value={contactNumber} onChange={getUserData} name="contactNumber" id="contact" type="number" placeholder={ContactNameWizardPlaceholder} />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;