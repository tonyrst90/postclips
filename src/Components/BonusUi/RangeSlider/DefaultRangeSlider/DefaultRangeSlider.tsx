import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliderForm } from "./DefaultRangeSliderForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultRangeSliders } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const DefaultRangeSlider = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={DefaultRangeSliders} span={basicSliderData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;