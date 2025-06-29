import { Col, FormGroup, Label, Row } from 'reactstrap';
import { useState } from 'react';
import { UploadProjectFiles } from '@/Constant';
import CommonFileUpload from '@/Components/BonusUi/Dropzone/Common/CommonFileUpload';

const UploadProjectFile = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{UploadProjectFiles}</Label>
          <CommonFileUpload/>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default UploadProjectFile