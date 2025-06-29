import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { Cod, Submit } from "@/Constant";
import FormGroupCommon from "./Common/FormGroupCommon";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const CodForm = () => {
  return (
    <Col xl={4} lg={6} className="box-col-33">
      <Card>
        <CommonCardHeader title={Cod} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder="First name" formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="Last name" formClass="col-6" />
              <FormGroupCommon type="text" placeholder="Pincode" formClass="col-6 p-r-0" />
              <FormGroupCommon type="number" placeholder="Enter mobile number" formClass="col-6" />
              <FormGroupCommon type="text" placeholder="State" formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="City" formClass="col-6" />
              <FormGroupCommon type="textarea" placeholder="Address" formClass="col-12" rows={3} />
              <Col xs={12}>
                <Button color="primary" block>{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CodForm;