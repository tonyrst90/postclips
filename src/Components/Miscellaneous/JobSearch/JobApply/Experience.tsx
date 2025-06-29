import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { CompanyNameJob, LocationJob, PeriodJob, PositionJob } from "@/Constant";
import { positionsData } from "@/Data/Miscellaneous/JobSearch/JobSearch";

const ExperienceClass = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const handleChange2 = (date: Date|null) => setStartDate(date);
  const handleChange3 = (date: Date|null) => setEndDate(date);

  return (
    <Form className="theme-form">
      <Row>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label>{LocationJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter Location" />
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100 xl-mt-job">
          <Label className="col-form-label text-end pt-0">{PeriodJob}:<span className="font-danger">*</span></Label>
          <Row>
            <Col sm={6}>
              <InputGroup><DatePicker className="form-control digits" selected={startDate} onChange={handleChange2} /></InputGroup>
            </Col>
            <Col sm={6} className="xs-mt-period">
              <InputGroup><DatePicker className="form-control digits" selected={endDate} onChange={handleChange3} /></InputGroup>
            </Col>
          </Row>
        </Col>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <div className="col-form-label pt-0">{PositionJob}:<span className="font-danger">*</span></div>
            <Typeahead labelKey="name" multiple={false} options={positionsData} id="Position" placeholder="Enter Position" />
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label check>{CompanyNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter Company Name" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default ExperienceClass;
