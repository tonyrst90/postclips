import { CityWizard, CountryWizard, SignUpToAccount, StateWizard } from "@/Constant";
import { RegisterWizardForm } from "@/Types/Auth.type";
import { FormGroup, Input, Label } from "reactstrap";

const DoneForm: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { country, state, city } = formValue;

  return (
    <div id="step-4" className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{'Enter your email & password to login'}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="mb-3">
            <Label className="control-label" check>{CountryWizard}</Label>
            <Input value={country} onChange={getUserData} name="country" className="mt-1" type="text" placeholder="Country" required />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label className="control-label" check>{StateWizard}</Label>
            <Input value={state} onChange={getUserData} className="mt-1" name="state" type="text" placeholder="State" required />
          </FormGroup>
          <FormGroup className="form-group mb-3">
            <Label className="control-label" check>{CityWizard}</Label>
            <Input value={city} onChange={getUserData} name="city" className="mt-1" type="text" placeholder="City" required />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default DoneForm;