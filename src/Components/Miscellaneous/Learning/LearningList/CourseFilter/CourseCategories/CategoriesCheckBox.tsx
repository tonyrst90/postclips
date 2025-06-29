import { Input, Label } from "reactstrap";
import { CategoriesLearning } from "@/Constant";
import { learningFilterData } from "@/Data/Miscellaneous/Learning/Learning";

const CategoriesCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{CategoriesLearning}</span>
      </div>
      {learningFilterData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`chk-ani-${index}`}>
          <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />{data}
        </Label>
      ))}
    </div>
  );
};

export default CategoriesCheckBox;