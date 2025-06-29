import { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
import FilterCheckBox from "./FilterCheckBox";
import SearchAndMap from "./SearchAndMap";
import { FilterHeading, FindJobs } from "@/Constant";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="filter-cards-view animate-chk">
          <SearchAndMap />
          <FilterCheckBox />
          <Button className="text-center" color="primary" >{FindJobs}</Button>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default Filter;