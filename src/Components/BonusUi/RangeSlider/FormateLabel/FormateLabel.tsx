import { Card, CardBody, Col } from "reactstrap";
import FormateLabelForm from "./FormateLabelForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FormattedLabels } from "@/Constant";
import { basicSliderData } from "@/Data/BonusUi/RangSlider";

const FormateLabel = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={FormattedLabels} span={basicSliderData} />
        <CardBody>
          <FormateLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateLabel;
