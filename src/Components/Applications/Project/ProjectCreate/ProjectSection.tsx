import { Priority, ProjectRate, ProjectType, } from '@/Constant'
import { ErrorMessage, Field } from 'formik'
import { Col, FormGroup, Label, Row } from 'reactstrap'

const ProjectSection = () => {
  return (
    <Row>
      <Col sm={4}>
        <FormGroup>
          <Label>{ProjectRate}</Label>
          <Field name="progress" className="form-control" type="number" placeholder='Enter project Rate' />
          <ErrorMessage name="progress" component="span" className="text-danger" />
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup>
          <Label>{ProjectType}</Label>
          <Field name="type" as="select" className="form-control form-select">
            <option>{'Hourly'}</option>
            <option>{'Fix price'}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup>
          <Label>{Priority}</Label>
          <Field name="priority" as="select" className="form-control form-select">
            <option>{'Low'}</option>
            <option>{'Medium'}</option>
            <option>{'High'}</option>
            <option>{'Urgent'}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  )
}
export default ProjectSection