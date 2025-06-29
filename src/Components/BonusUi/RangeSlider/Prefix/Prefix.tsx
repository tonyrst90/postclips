import { Card, CardBody, Col } from "reactstrap";
import PrefixForm from "./PrefixForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Prefixes } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const Prefix = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={Prefixes} span={basicSliderData} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
