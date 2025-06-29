/* eslint-disable @next/next/no-img-element */
import { Emi, ImagePath, Submit } from "@/Constant";
import { Button, Card, CardBody, Col, Form, FormGroup, Row } from "reactstrap";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const EmiForm = () => {
  const emiBankSelect: string[] = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];
  const emiCardSelect: string[] = ["Select Card", "2", "3", "4", "5"];
  const emiYearSelect: string[] = ["Select Duration", "2015-2016", "2016-2017", "2017-2023", "2023-2019"];

  return (
    <Col xl={4} lg={6} className="box-col-33">
      <Card>
        <CommonCardHeader title={Emi} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder="First name" formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="Last name" formClass="col-6" />
              <FormGroupCommon type="text" placeholder="Pincode" formClass="col-6 p-r-0" />
              <SelectCommon size={1} data={emiBankSelect} selectClass="col-6" />
              <SelectCommon size={1} data={emiCardSelect} selectClass="col-12" />
              <SelectCommon size={1} data={emiYearSelect} selectClass="col-12" />
              <FormGroup>
                <Col xs={12}>
                  <ul className="payment-opt">
                    <li><img src={`${ImagePath}/ecommerce/mastercard.png`} alt="" /></li>
                    <li><img src={`${ImagePath}/ecommerce/visa.png`} alt="" /></li>
                    <li><img src={`${ImagePath}/ecommerce/paypal.png`} alt="" /></li>
                  </ul>
                </Col>
              </FormGroup>
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

export default EmiForm;