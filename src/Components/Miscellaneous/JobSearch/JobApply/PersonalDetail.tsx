import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import PersonalDetailRow from "./PersonalDetailRow";
import { EmailJob, FullNameJob, PasswordJob, PhoneNumberJob, RepeatPasswordJob } from "@/Constant";

const PersonalDetail = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col>
          <FormGroup>
            <Label check>{FullNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter your full name" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{EmailJob}:<span className="font-danger">*</span></Label>
            <Input type="email" placeholder="Enter email" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{PasswordJob}:<span className="font-danger">*</span></Label>
            <Input type="password" placeholder="Enter password" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{RepeatPasswordJob}:<span className="font-danger">*</span></Label>
            <Input type="password" placeholder="Repeat password" />
          </FormGroup>
        </Col>
      </Row>
      <PersonalDetailRow />
      <Row>
        <Col>
          <FormGroup>
            <Label check>{PhoneNumberJob}:</Label>
            <Input type="number" placeholder="Enter Phone no." />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default PersonalDetail;