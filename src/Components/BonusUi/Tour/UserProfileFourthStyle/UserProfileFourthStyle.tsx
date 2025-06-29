import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import { FourthStyleSocialMedia } from "./FourthStyleSocialMedia";
import CommonTourHeader from "../Common/CommonTourHeader";

const UserProfileFourthStyle = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="09 Dec" time="2 min read" />
            <FourthStyleSocialMedia />
          </Row>
          <hr />
          <p className="block-ellipsis">{`Nature has a role in our lives. We are a part of everything since we sprang from a seed and the ground, but we are quickly losing the perception that we are animals much like the rest. Is it possible to feel something when you gaze at, appreciate, and hear a tree? Can you pay attention to the tiny weed, the creeper climbing the wall, the light on the leaves, and the numerous shadows? All of this must be understood, and one must have a feeling of connectedness with the natural world around them. Despite living in a town, there are still a few trees here and there. The next garden's bloom could not be well-kept.`}</p>
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileFourthStyle;
