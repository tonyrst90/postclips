import { nestingIconData } from "@/Data/Buttons/GroupButton";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export const NestingButtonIcons = () => {
  return (
    <>
      {nestingIconData.map((list) => (
        <div className="m-b-30" key={list.id}>
          <ButtonGroup>
            {list.child.map((item) => (
              <Button color={item.color} size={item.size ? item.size : ""} key={item.id}>
                <i className={`fa ${item.iconClass}`}></i>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      ))}
    </>
  );
};
