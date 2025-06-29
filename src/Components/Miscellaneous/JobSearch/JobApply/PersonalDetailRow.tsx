import { Typeahead } from "react-bootstrap-typeahead";
import { Col, FormGroup, Row } from "reactstrap";
import { BirthDateJob } from "@/Constant";
import { daysJob, monthsJob, yearsJob } from "@/Data/Miscellaneous/JobSearch/JobSearch";

const PersonalDetailRow = () => {

  return (
    <Row>
      <Col sm={4}>
        <FormGroup>
          <div className="col-form-label pt-0 mb-1">{BirthDateJob}</div>
          <Col sm={12}><Typeahead labelKey="name" multiple={false} id="Month" options={monthsJob} placeholder="Choose a Month..." /></Col>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup>
          <div className="col-form-label m-2 d-sm-block d-none"></div>
          <Col sm={12}><Typeahead labelKey="name" multiple={false} options={daysJob} id="date" placeholder="date" /></Col>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup>
          <div className="col-form-label m-2 d-sm-block d-none"></div>
          <Col sm={12}><Typeahead labelKey="name" multiple={false} options={yearsJob} id="Year" placeholder="Year" /></Col>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default PersonalDetailRow;