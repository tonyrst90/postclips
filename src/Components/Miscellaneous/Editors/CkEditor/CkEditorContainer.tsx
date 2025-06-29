import React from "react";
import { Container, Row } from "reactstrap";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor";
import { CkEditor, Editors } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const CkEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CkEditor} parent={Editors} title={CkEditor} />
      <Container fluid>
        <Row>
          <Editor />
          <InlineEditor />
        </Row>
      </Container>
    </>
  );
};

export default CkEditorContainer;