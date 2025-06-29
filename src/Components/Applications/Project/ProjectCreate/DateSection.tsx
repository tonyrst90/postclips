import { Field } from 'formik';
import { useState } from 'react'
import { Col, FormGroup, Label, Row } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import { EndingDate, ProjectSize, StartingDate } from '@/Constant';

const DateSection = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  return (
    <Row>
      <Col sm={4}>
        <FormGroup>
          <Label>{ProjectSize}</Label>
          <Field as="select" name="size" className="form-control form-select">
            <option>{'Small'}</option>
            <option>{'Medium'}</option>
            <option>{'Big'}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup className="d-flex flex-column align-items-stretch">
          <Label>{StartingDate}</Label>
          <ReactDatePicker className="datepicker-here form-control" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup className="d-flex flex-column align-items-stretch">
          <Label>{EndingDate}</Label>
          <ReactDatePicker className="datepicker-here form-control" selected={endDate} onChange={(date: Date | null) => setEndDate(date)} />
        </FormGroup>
      </Col>
    </Row>
  );
}
export default DateSection