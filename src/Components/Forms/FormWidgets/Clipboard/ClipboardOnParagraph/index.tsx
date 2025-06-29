import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClipboardOnParagraphTitle, Copy } from "@/Constant";

const ClipboardOnParagraph = () => {
  const ClipBoardParaGraph: string = "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardParaGraph, copied: false });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ ...clipBoardValues, copied: true });

      setTimeout(() => {
        setClipBoardValues({ ...clipBoardValues, copied: false });
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CommonCardHeader headClass="pb-0" title={ClipboardOnParagraphTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Copy from paragraph"}</p>
            <h6 className="border rounded f-w-300">
              <CardBody>{ClipBoardParaGraph}</CardBody>
            </h6>
            <div className="mt-3 text-end">
              <Button className="btn-clipboard" color="info" onClick={handleCopy}>
                <i className="fa fa-copy" /> {Copy}
              </Button>
              {clipBoardValues.copied && <span className="ms-2 text-success">Copied!</span>}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardOnParagraph;
