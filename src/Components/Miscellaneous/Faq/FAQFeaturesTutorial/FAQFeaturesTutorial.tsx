import { Col, Row } from "reactstrap";
import FaqFeaturesTutorials from "./FaqFeaturesTutorials";
import { FeaturedTutorials } from "@/Constant";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg={12} className="featured-tutorial">
      <div className="header-faq">
        <h5 className="mb-0">{FeaturedTutorials}</h5>
      </div>
      <Row>
        <FaqFeaturesTutorials />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
