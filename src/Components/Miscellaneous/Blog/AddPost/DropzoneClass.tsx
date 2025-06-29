import { Form } from "reactstrap";
import CommonFileUpload from "../../../BonusUi/Dropzone/Common/CommonFileUpload";

const DropzoneClass = () => {

  return (
    <Form className="dropzone">
      <CommonFileUpload/>
    </Form>
  );
};

export default DropzoneClass;