import React from "react";
import { Col, Label } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToolbarBoxProp } from "@/Types/ECommerce.type";

const ToolbarBox: React.FC<ToolbarBoxProp> = ({ label, paragraph }) => {
  return (
    <Col xs={12}>
      {label && (
        <Col xs={12}>
          <Label>{"Additional Description"}</Label>
        </Col>
      )}
      <div className="toolbar-box">
        <CKEditor editor={ClassicEditor} data="Enter your messages..." />
      </div>
      <p className="f-light">{paragraph}</p>
    </Col>
  );
};
export default ToolbarBox;
