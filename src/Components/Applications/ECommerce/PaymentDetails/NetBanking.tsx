import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { NetBankings, Submit } from "@/Constant";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const NetBanking = () => {
  const emiBankSelect: string[] = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];

  return (
    <Col xl={4} lg={6} className="box-col-33">
      <Card>
        <CommonCardHeader title={NetBankings} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder="AC Holder name" formClass="col-12" />
              <FormGroupCommon type="text" placeholder="Account number" formClass="col-12" />
              <SelectCommon size={1} data={emiBankSelect} selectClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder="ICFC code" formClass="col-6" />
              <FormGroupCommon type="number" placeholder="Enter mobile number" formClass="col-12" />
              <FormGroupCommon type="text" placeholder="Other Details" formClass="col-12" />
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

export default NetBanking;