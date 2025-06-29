import { Card, CardBody, Col } from "reactstrap";
import MinMaxValueForm from "./MinMaxValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MinMaxValues } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const MinMaxValue = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={MinMaxValues} span={basicSliderData} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
