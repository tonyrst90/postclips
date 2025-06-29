import { jobTitleData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import { CardBody, Input, Label } from "reactstrap";

const JobTitleCheckBox = () => {
  return (
    <CardBody className="animate-chk">
      {jobTitleData.map((data, index) => (
        <Label className="d-block" htmlFor={`check-${index}`} key={index} check>
          <Input className="checkbox_animated" id={`check-${index}`} type="checkbox" />
          {data.JobTitle}({data.JobNumber})
        </Label>
      ))}
    </CardBody>
  );
};

export default JobTitleCheckBox;