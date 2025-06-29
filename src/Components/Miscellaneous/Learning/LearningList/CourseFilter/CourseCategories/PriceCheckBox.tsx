import { Input, Label } from "reactstrap";
import { PriceLearning } from "@/Constant";
import { priceCheckData } from "@/Data/Miscellaneous/Learning/Learning";

const PriceCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{PriceLearning}</span>
      </div>
      {priceCheckData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Price-${index}`} check>
          <Input className="radio_animated" id={`Price-${index}`} type="radio" name="rdo-ani" defaultChecked />
          {data}
        </Label>
      ))}
    </div>
  );
};

export default PriceCheckBox;