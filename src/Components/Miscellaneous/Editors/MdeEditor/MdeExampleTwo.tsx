import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Instructions, SecondExample } from "@/Constant";
import SimpleMdeReact from "react-simplemde-editor";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MdeExampleTwo = () => {
  const [value, setValue] = useState("");
  const handelChange = (newValue: string) => setValue(newValue)
  const MNDeditortext = "Enter text in the area on the left. For more info, click the ? (help) icon in the menu.";

  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CommonCardHeader title={SecondExample} headClass="pb-0" />
          <CardBody>
            <Row className="editor_container">
              <Col md={6}>
                <SimpleMdeReact id="editor_container" options={{ autofocus: true, spellChecker: false }} onChange={handelChange} />
              </Col>
              <Col md={6} className="reader">
                <h3>{Instructions}</h3>
                <p>{MNDeditortext}</p>
                <br />
                {value}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default MdeExampleTwo;