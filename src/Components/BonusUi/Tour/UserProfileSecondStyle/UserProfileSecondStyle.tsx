import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import { SocialMediaSection } from "./SocialMediaSection";
import { SecondStyleAboutSection } from "./SecondStyleAboutSection";
import CommonTourHeader from "../Common/CommonTourHeader";

const UserProfileSecondStyle = () => {
  return (
    <Col sm={12} className="step5">
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="6 min read" />
            <SocialMediaSection />
          </Row>
          <hr />
          <SecondStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileSecondStyle;
