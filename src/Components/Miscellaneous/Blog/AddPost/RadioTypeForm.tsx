import { FormGroup, Input, Label } from "reactstrap";
import { PostType } from "@/Constant";
import { radioData } from "@/Data/Miscellaneous/Blog/Blog";

const RadioTypeForm = () => {

  return (
    <FormGroup>
      <Label className="mb-2" check>{PostType}:</Label>
      <div className="m-checkbox-inline">
        {radioData.map((data, index) => (
          <Label htmlFor={`edo-ani-${index}`} key={index} check>
            <Input className="radio_animated" id={`edo-ani-${index}`} type="radio" name="rdo-ani" defaultChecked={data.defaultChecked} />{data.text}</Label>
        ))}
      </div>
    </FormGroup>
  );
};

export default RadioTypeForm;