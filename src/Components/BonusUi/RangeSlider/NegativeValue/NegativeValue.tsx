import { Card, CardBody, Col } from "reactstrap";
import NegativeValueForm from "./NegativeValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NegativeValues } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const NegativeValue = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={NegativeValues} span={basicSliderData} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;