import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticRightRibbons } from "./StaticRightRibbons";
import { DynamicRightRibbons } from "./DynamicLeftRibbons";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationsOfRightRibbons } from "@/Constant";
import { rightRibbonData } from "@/Data/BonusUi/Ribbons";

const RightRibbons = () => {
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonCardHeader title={VariationsOfRightRibbons} span={rightRibbonData} />
          <CardBody>
            <Row className="g-3">
              <StaticRightRibbons />
              <DynamicRightRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightRibbons;