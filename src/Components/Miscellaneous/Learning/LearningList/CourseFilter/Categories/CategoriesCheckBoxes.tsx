import { Card, CardBody, Col, Collapse } from "reactstrap";
import { useState } from "react";
import DesignCategories from "./DesignCategories";
import DevelopmentCategories from "./DevelopmentCategories";
import CommonLearningHeader from "../Common/CommonLearningHeader";
import { CategoriesTitleLearning } from "@/Constant";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl={12}>
      <Card>
        <CommonLearningHeader heading={CategoriesTitleLearning} isOpen={isOpen} setIsOpen={setIsOpen} />
        <CardBody className="px-0">
          <Collapse isOpen={isOpen}>
            <DesignCategories />
            <DevelopmentCategories />
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;