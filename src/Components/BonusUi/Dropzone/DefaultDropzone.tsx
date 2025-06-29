import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultFileUploads } from "@/Constant";
import { defaultFileUpload } from "@/Data/BonusUi/Dropzone";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Card, CardBody, Col } from "reactstrap";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);
  
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={DefaultFileUploads} span={defaultFileUpload} />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
