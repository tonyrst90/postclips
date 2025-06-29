import { checkBoxData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import { Input, Label } from "reactstrap";

const FilterCheckBox = () => {
  return (
    <div className="checkbox-animated">
      {checkBoxData.map((data, index) => (
        <Label className="d-block" htmlFor={`chk-ani-${index}`} key={index} check>
          <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox"/>
          {data.inputTittle} {data.inputNumber}
        </Label>
      ))}
    </div>
  );
};

export default FilterCheckBox;