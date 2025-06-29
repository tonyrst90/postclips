import { Card, CardBody, Col } from "reactstrap";
import { CKEditorExample } from "@/Constant";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const Editor = () => {
  const content = `After being sent to the Moon by the Saturn V's upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the Sea of Tranquility. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the Pacific Ocean on July 24.`;

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader headClass="pb-0" title={CKEditorExample} />
        <CardBody>
          <CKEditor editor={ClassicEditor} data={content} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Editor;