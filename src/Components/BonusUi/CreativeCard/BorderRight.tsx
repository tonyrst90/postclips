import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";
import { BorderRights } from "@/Constant";
import { borderRightData } from "@/Data/BonusUi/CreativeCard";

const BorderRight = () => {
const BorderRightText1: string = "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them. .";

  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCreativeCardHeader headerClass="border-r-secondary" title={BorderRights} span={borderRightData} />
        <CardBody>
          <p>{BorderRightText1}</p>
          <Form>
            <Label>{'Email address'}</Label>
            <Input type="email" placeholder='youremail@gmail.com' />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;