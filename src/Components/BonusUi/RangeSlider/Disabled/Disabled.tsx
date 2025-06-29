import { Card, CardBody, Col } from "reactstrap";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Disable } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const Disabled = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={Disable} span={basicSliderData} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
