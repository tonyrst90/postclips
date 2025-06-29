import { CommonLearningHeaderProp } from "@/Types/JobSearch.type";
import { ChevronDown, ChevronUp } from "react-feather";
import { Button, CardHeader } from "reactstrap";

const CommonLearningHeader: React.FC<CommonLearningHeaderProp> = ({ heading, isOpen, setIsOpen }) => {
  return (
    <CardHeader>
      <h5 className="mb-0">
        <Button color="tranparent" className="btn-link d-flex justify-content-between" onClick={() => setIsOpen(!isOpen)}>{heading}
          {isOpen ? <ChevronDown className="m-0" /> : <ChevronUp className="m-0" />}
        </Button>
      </h5>
    </CardHeader>
  );
};

export default CommonLearningHeader;