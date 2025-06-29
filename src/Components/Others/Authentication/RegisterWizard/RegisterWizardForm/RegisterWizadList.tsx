/* eslint-disable @next/next/no-img-element */
import { ImagePath } from "@/Constant";
import { registerStepData } from "@/Data/Pages/Pages";
import { RegisterWizardListProp } from "@/Types/Auth.type";
import Link from "next/link";

export const RegisterWizardList: React.FC<RegisterWizardListProp> = ({ level }) => {

  return (
    <ul className="custom-scrollbar anchor">
      <li>
        <Link className="logo text-start ps-0" href="/dashboard/default">
          <img className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <img className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage" />
        </Link>
      </li>
      {registerStepData.map((data, index) => (
        <li key={index}>
          <Link href={`#step-${index}`} className={`${level === index + 1 ? "selected" : level > index + 1 ? "done" : "disabled"}`}>
            <h4>{index + 1}</h4>
            <h5>
              {data.tittle}
              {data.tittle === "Done" ? <i className="fa fa-thumbs-o-up ms-1" /> : " "}
            </h5>
            <small>{data.detail}</small>
          </Link>
        </li>
      ))}
      <li>
        <img src={`${ImagePath}/login/icon.png`} alt="looginpage" />
      </li>
    </ul>
  );
};