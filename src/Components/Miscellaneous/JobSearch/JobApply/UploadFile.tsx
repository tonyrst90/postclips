import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { UploadCoverLetterJob, UploadRecommendationsJob, UploadYourCvJob } from "@/Constant";

const UploadFileClass = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col>
          <FormGroup>
            <Label className="col-form-label pt-0">{UploadCoverLetterJob}:<span className="font-danger">*</span></Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label className="col-form-label pt-0">{UploadYourCvJob}:<span className="font-danger">*</span></Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Label className="col-form-label pt-0">{UploadRecommendationsJob}:</Label>
            <Input type="file" />
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default UploadFileClass;