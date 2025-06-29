import { Col, FormGroup, Label, Row } from 'reactstrap'
import { ErrorMessage, Field } from 'formik'
import { EnterSomeDetails } from '@/Constant'

const DescriptionSection = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{EnterSomeDetails}</Label>
          <Field name="description" as="textarea" className="form-control" rows={3} />
          <ErrorMessage name="description" component="span" className="text-danger" />
        </FormGroup>
      </Col>
    </Row>
  )
}

export default DescriptionSection