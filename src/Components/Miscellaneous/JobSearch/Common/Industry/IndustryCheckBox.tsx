import { industryData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import { CardBody, Input, Label } from "reactstrap";

const IndustryCheckBox = () => {
  return (
    <CardBody className="animate-chk">
      {industryData.map((data, index) => (
        <Label className="d-block" key={index} htmlFor={`industryCheckBox-${index}`} check>
          <Input className="checkbox_animated" id={`industryCheckBox-${index}`} type="checkbox" />
          {data.industryTitle}({data.industryNumber})
        </Label>
      ))}
    </CardBody>
  );
};

export default IndustryCheckBox;