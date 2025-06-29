import { skillCheckBoxData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import { CardBody, Input, Label } from "reactstrap";

const SkillCheckBox = () => {
  return (
    <CardBody className="animate-chk">
      {skillCheckBoxData.map((data, index) => (
        <Label className="d-block" key={index} htmlFor={`checkbox-animate-${index}`} check>
          <Input className="checkbox_animated" id={`checkbox-animate-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </CardBody>
  );
};

export default SkillCheckBox;