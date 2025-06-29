import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CopyHighlightedText, CopyPortionParagraphTitle } from "@/Constant";

const CopyPortionFromParagraph = () => {
  const highlightText = "Web design is the process of creating websites";
  const [clipBoardValues, setClipBoardValues] = useState({ value: highlightText, copied: false });

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
        <CommonCardHeader headClass="pb-0" title={CopyPortionParagraphTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Copy portion from paragraph"}</p>
            <h6 className="border rounded f-w-300">
              <CardBody>
                <span className="bg-primary text-white p-1">{"Web design is the process of creating websites "}</span>
                {"that are visible online. Take a website design course to learn how to  create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content."}
              </CardBody>
            </h6>
            <div className="mt-3 text-end">
              <Button className="btn-clipboard" color="secondary" onClick={handleCopy}>
                <i className="fa fa-copy" /> {CopyHighlightedText}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CopyPortionFromParagraph;
