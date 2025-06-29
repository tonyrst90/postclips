import { FinishWizardButton, NextWizardButton, PreviousWizardButton } from "@/Constant";
import { RegisterWizardButtonProp } from "@/Types/Auth.type";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export const RegisterWizardButtons: React.FC<RegisterWizardButtonProp> = ({ formValue, showFinish, level, handleBackButton, handleNextButton }) => {
  const { country, state, city } = formValue

  const handleFinish = () => {
    if (country !== "" && state !== "" && city !== "") toast.success("form submitted successfully")
  }

  return (
    <div className="action-bar">
      {level === 4 && (<Button color="primary" onClick={handleFinish}>{FinishWizardButton}</Button>)}
      {level < 4 && (<Button color="primary" className={showFinish ? "buttonDisabled" : ""} onClick={handleNextButton}>{NextWizardButton}</Button>)}
      {level > 1 && (<Button color="primary" onClick={handleBackButton}>{PreviousWizardButton}</Button>)}
    </div>
  );
};