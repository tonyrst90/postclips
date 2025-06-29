import { Card, Col, Collapse, CardBody, Button } from "reactstrap";
import { useState } from "react";
import SearchInput from "./SearchInput";
import CategoriesCheckBox from "./CategoriesCheckBox";
import DurationCheckBox from "./DurationCheckBox";
import PriceCheckBox from "./PriceCheckBox";
import StatusCheckBox from "./StatusCheckBox";
import { FilterLearning, FindCourseLearning } from "@/Constant";
import CommonLearningHeader from "../Common/CommonLearningHeader";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <CommonLearningHeader heading={FindCourseLearning} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Button color="primary" className="text-center">{FilterLearning}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CourseCategories;