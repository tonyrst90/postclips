import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PreviewImage } from "@/Constant";
import { imagePreviewData } from "@/Data/BonusUi/Dropzone";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImagePreview = () => {
  const [files, setFiles] = useState([]);

  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={PreviewImage} span={imagePreviewData} />
        <CardBody>
          <FilePond files={files} allowReorder={true} allowMultiple={true} maxFiles={1} onupdatefiles={() => setFiles} labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagePreview;