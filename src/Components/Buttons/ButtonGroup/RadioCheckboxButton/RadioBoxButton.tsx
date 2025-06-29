import { ButtonPropsType } from "@/Types/Buttons.type";
import React from "react";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

export const RadioBoxButton: React.FC<ButtonPropsType> = ({ item }) => {
  return (
    <Col xl={4} md={6} sm={12}>
      <div className={item.btnClass}>
        <ButtonGroup>
          <Button color={item.colorClass}>
            <div className={item.divClass}>
              <Input id={item.id1} type="radio" name={item.name} value="option1" />
              <Label htmlFor={item.id1}>{item.title1}</Label>
            </div>
          </Button>
          <Button color={item.colorClass}>
            <div className={item.divClass}>
              <Input id={item.id2} type="radio" name={item.name} value="option1" defaultChecked />
              <Label htmlFor={item.id2}>{item.title2}</Label>
            </div>
          </Button>
        </ButtonGroup>
      </div>
    </Col>
  );
};
