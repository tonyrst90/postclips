import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SingleFileUploads } from "@/Constant";
import { fileUploadData } from "@/Data/BonusUi/Dropzone";

const SingleFileUpload = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={SingleFileUploads} span={fileUploadData} />
        <CommonFileUpload />
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
