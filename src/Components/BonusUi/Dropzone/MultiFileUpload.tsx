import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultiFileUploads } from "@/Constant";
import { fileUploadData } from "@/Data/BonusUi/Dropzone";

const MultiFileUpload = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={MultiFileUploads} span={fileUploadData} />
        <CommonFileUpload multiple/>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;