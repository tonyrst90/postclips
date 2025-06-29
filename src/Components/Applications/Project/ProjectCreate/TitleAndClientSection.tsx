import { ErrorMessage, Field } from 'formik'
import { Col, FormGroup, Label, Row } from 'reactstrap'
import { ClientName, ProjectTitleText } from '@/Constant'

const TitleAndClientSection = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label>{ProjectTitleText}</Label>
            <Field name="title" type="text" className="form-control" placeholder='Project name *' />
            <ErrorMessage name="title" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>{ClientName}</Label>
            <Field name="client" className="form-control" type="text" placeholder='Name client or company name' />
            <ErrorMessage name="client" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}
export default TitleAndClientSection