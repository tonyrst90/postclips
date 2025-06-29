import { Card, CardBody, Col, Row } from "reactstrap";
import { MdeFirstExample } from "@/Constant";
import SimpleMdeReact from "react-simplemde-editor";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const MdeExampleOne = () => {
  const MdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;

  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CommonCardHeader title={MdeFirstExample} headClass="pb-0" />
          <CardBody>
            <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MdeExampleOne;