import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticLeftRibbons } from "./StaticLeftRibbons";
import { DynamicLeftRibbons } from "./DynamicLeftRibbons";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationsOfLeftRibbons } from "@/Constant";
import { leftRibbonsData } from "@/Data/BonusUi/Ribbons";

const LeftRibbons = () => {
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonCardHeader title={VariationsOfLeftRibbons} span={leftRibbonsData} />
          <CardBody>
            <Row className="g-3">
              <StaticLeftRibbons />
              <DynamicLeftRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LeftRibbons;
