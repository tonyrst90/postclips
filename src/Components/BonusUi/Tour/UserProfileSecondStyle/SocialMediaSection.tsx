import { Col } from "reactstrap";
import CommonTourSocialMedia from "../Common/CommonTourSocialMedia";

export const SocialMediaSection = () => {
  return (
    <Col sm={4} className="colalign-self-center mt-0 text-end">
      <CommonTourSocialMedia time="3 min ago" className="step6" />
    </Col>
  );
};
