import React from "react";
import { Container } from "reactstrap";
import MdeExampleOne from "./MdeExampleOne";
import MdeExampleTwo from "./MdeExampleTwo";
import { Editors, MDEEditor } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const MdeEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MDEEditor} parent={Editors} title={MDEEditor} />
      <Container fluid>
        <MdeExampleOne />
        <MdeExampleTwo />
      </Container>
    </>
  );
};

export default MdeEditorContainer;