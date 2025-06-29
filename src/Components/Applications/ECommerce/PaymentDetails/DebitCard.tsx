import { Button, Card, CardBody, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { DebitCards, ExpirationDate, Submit } from "@/Constant";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const DebitCard = () => {
const DebitMonthSelect:string[]= ["Select Month","Jan","Fab","March","April"]
const DebitYearSelect:string[]= ["Select Year","2015","2016","2017","2023","2019"]

  return (
    <Col xl={4} lg={6} className="box-col-33 debit-card">
      <Card>
        <CommonCardHeader title={DebitCards} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form e-commerce-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder="Full name here" formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="Card Number" formClass="col-6" />
              <FormGroupCommon type="text" placeholder="CVV Number" formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="CVC" formClass="col-6" />
              <FormGroup>
                <Col xs={12}>
                  <Label className="col-form-label p-b-20" check>{ExpirationDate}</Label>
                </Col>
              </FormGroup>
              <SelectCommon size={1} data={DebitMonthSelect} selectClass="col-6 p-r-0" />
              <SelectCommon size={1} data={DebitYearSelect} selectClass="col-6" />
            </Row>
            <Col xs={12}>
              <Button color="primary" block>{Submit}</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DebitCard;