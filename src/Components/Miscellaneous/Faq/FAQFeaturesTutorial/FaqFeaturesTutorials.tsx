import { ImagePath } from "@/Constant";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col } from "reactstrap";
import FaqProductHover from "./FaqProductHover";
import Image from "next/image";
import { featuresData } from "@/Data/Miscellaneous/Faq/Faq";

const FaqFeaturesTutorials = () => {
  return (
    <>
      {featuresData.map((item, id) => (
        <Col xl={3} md={6} className="box-col-3" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <Image priority width={600} height={400} alt="feature" className="img-fluid media" src={`${ImagePath}/${item.img}`} />
              <FaqProductHover />
            </div>
            <CardBody>
              <h4 className="mb-1">{item.title}</h4>
              <p>{item.short_description}</p>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor='#003FDD' initialValue={Math.random() * 5} size={14} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FaqFeaturesTutorials;