import { FeaturedTutorial, ImagePath } from "@/Constant";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import ProductHover from "./ProductHover";
import Image from "next/image";
import { featuresData } from "@/Data/Miscellaneous/Knowledgebase/Knowledgebase";

const FeaturesTutorial = () => {
  return (
    <Col lg={12}>
      <div className="header-faq">
        <h3 className="mb-0">{FeaturedTutorial}</h3>
      </div>
      <Row>
        {featuresData.map((item, id) => (
          <Col xl={3} sm={6} className="box-col-3" key={id}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <Image priority width={375} height={281} alt="feature" className="img-fluid" src={`${ImagePath}/faq/${item.img}`} />
                <ProductHover />
              </div>
              <CardBody>
                <h6>{item.title}</h6>
                <p>{item.short_description}</p>
              </CardBody>
              <CardFooter>
                <span>{item.date}</span>
                <Rating fillColor="#003FDD" initialValue={Math.random() * 5} size={17} />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default FeaturesTutorial;