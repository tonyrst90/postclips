import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { CollegeNameJob, DegreeLevelJob, DegreePlaceholder, PeriodJob, SpecializationJob } from "@/Constant";
import { typeHeadOptionsData } from "@/Data/Miscellaneous/JobSearch/JobSearch";

const EducationClass = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const handleChange = (date: Date|null) => setStartDate(date);
  const handleChange1 = (date: Date|null) => setEndDate(date);

  return (
    <Form className="theme-form">
      <Row>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label check>{CollegeNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter college name" />
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100 xl-mt-job">
          <Label check className="col-form-label text-end pt-0">{PeriodJob}:<span className="font-danger">*</span></Label>
          <Row>
            <Col sm={6}>
              <InputGroup><DatePicker className="form-control digits" selected={startDate} onChange={handleChange} /></InputGroup>
            </Col>
            <Col sm={6} className="xs-mt-period">
              <InputGroup><DatePicker className="form-control digits" selected={endDate} onChange={handleChange1} /></InputGroup>
            </Col>
          </Row>
        </Col>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <div className="col-form-label pt-0">{DegreeLevelJob}:<span className="font-danger">*</span></div>
            <Typeahead id="Degree" labelKey="name" multiple={false} options={typeHeadOptionsData} placeholder={DegreePlaceholder} />
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label check>{SpecializationJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter specialization" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default EducationClass;
