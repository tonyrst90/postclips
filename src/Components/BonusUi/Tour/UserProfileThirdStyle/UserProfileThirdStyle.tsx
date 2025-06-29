import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import { ThirdStyleAboutSection } from "./ThirdStyleAboutSection";
import { ThirdStyleSocialMedia } from "./ThirdStyleSocialMedia";
import CommonTourHeader from "../Common/CommonTourHeader";

const UserProfileThirdStyle = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="1 min read" />
            <ThirdStyleSocialMedia />
          </Row>
          <hr />
          <ThirdStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileThirdStyle;
