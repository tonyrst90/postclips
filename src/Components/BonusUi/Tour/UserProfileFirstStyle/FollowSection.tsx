import { FollowerTour, FollowingTour } from "@/Constant";
import { Col, Row } from "reactstrap";

export const FollowSection = () => {
  return (
    <div className="follow">
      <Row>
        <Col sm={6} className="border-end">
          <div className="follow-num counter">25.8K</div>
          <span>{FollowerTour}</span>
        </Col>
        <Col sm={6}>
          <div className="follow-num counter">65.2M</div>
          <span>{FollowingTour}</span>
        </Col>
      </Row>
    </div>
  );
};