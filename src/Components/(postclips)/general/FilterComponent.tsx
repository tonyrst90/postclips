import { FilterComponentProps } from "@/Types/Tables.type";
import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilter,
  filterText,
}) => {
  return (
    <Row className="align-items-center justify-content-end">
      <Col xs="auto">
        <Label>{"Search"}:</Label>
      </Col>
      <Col xs="auto" className="d-flex flex-row">
        <Input
          type="text"
          value={filterText}
          onChange={onFilter}
          placeholder="Search..."
        />
      </Col>
    </Row>
  );
};
export default FilterComponent;
