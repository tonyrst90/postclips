import { useState } from "react";
import { Button, Card, Col, Collapse } from "reactstrap";
import JobTitleCheckBox from "./JobTitleCheckBox";
import HeaderWithIcon from "../HeaderWithIcon";
import { AllJobTitle, JobHeading } from "@/Constant";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <JobTitleCheckBox />
        <Button block className="text-center" color="primary">{AllJobTitle}</Button>
      </Collapse>
    </Card>
  );
};

export default JobTitleClass;