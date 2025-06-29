"use client";
import { Container, Row } from "reactstrap";
import { GroupButtonClass } from "./GroupButtonClass";
import { RadioCheckboxButton } from "./RadioCheckboxButton/RadioCheckboxButton";
import { NestingButton } from "./NestingButton/NestingButton";
import { VerticalButtonGroup } from "./VerticalButtonGroup";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ButtonGroupTitle, ButtonsTitle } from "@/Constant";

export const ButtonGroupContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ButtonGroupTitle} parent={ButtonsTitle} title={ButtonGroupTitle} />
      <Container fluid>
        <Row>
          <GroupButtonClass />
          <RadioCheckboxButton />
          <NestingButton />
          <VerticalButtonGroup />
        </Row>
      </Container>
    </>
  );
};