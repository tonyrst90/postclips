import { ImagePath, PricingPlan } from "@/Constant";
import Image from "next/image";
import { Grid } from "react-feather";
import { Button } from "reactstrap";

const PricingPlans = () => {
  return (
    <ul>
      <li>
        <Button outline color="primary"><Grid />{PricingPlan}</Button>
      </li>
      <li>
        <div className="pricing-plan">
          <h6>{'Trial Version'} </h6>
          <h5>{'FREE'}</h5>
          <p>{'100 GB Space'}</p>
          <Button size="xs" outline color="primary">{'Selected'}</Button>
          <Image className="bg-img" src={`${ImagePath}/dashboard/folder.png`} width={128} height={128} alt="" />
        </div>
      </li>
    </ul>
  );
};

export default PricingPlans;