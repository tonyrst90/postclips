import React, { useState } from "react";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClipBoardOnTextInputTitle, Copy, Cut } from "@/Constant";

const ClipboardOnTextInput = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: "", copied: false });
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: clipboardTextValue.value, copied: true });
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: "", copied: false });
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCardHeader headClass="pb-0" title={ClipBoardOnTextInputTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Cut/copy from text input"}</p>
            <Input id="clipboardExample1" type="text" placeholder="type some text to copy / cut" value={clipboardTextValue.value} onChange={({ target: { value } }) => setClipboardTextValue({ value, copied: false })} />
            <div className="mt-3 text-end">
              <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
                <i className="fa fa-copy" /> {Copy}
              </Button>
              <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
                <i className="fa fa-cut" /> {Cut}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardOnTextInput;
