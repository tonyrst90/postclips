import { Label, Input } from "reactstrap";
import { DurationLearning } from "@/Constant";
import { durationData } from "@/Data/Miscellaneous/Learning/Learning";

const DurationCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{DurationLearning}</span>
      </div>
      {durationData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Duration-${index}`} check>
          <Input className="checkbox_animated" id={`Duration-${index}`} type="checkbox" />{data}
        </Label>
      ))}
    </div>
  );
};

export default DurationCheckBox;