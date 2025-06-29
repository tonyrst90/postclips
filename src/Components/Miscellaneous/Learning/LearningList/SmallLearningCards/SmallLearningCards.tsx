import { ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";
import Image from "next/image";
import { smallLearningCardsData } from "@/Data/Miscellaneous/Learning/Learning";

const SmallLearningCards = () => {
  return (
    <>
      {smallLearningCardsData.map((data, index) => (
        <Col xl={4} sm={6} className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image priority width={375} height={281} className="img-fluid top-radius-blog" src={`${ImagePath}/faq/${data.src}.jpg`} alt="faq" />
                <div className="product-hover">
                  <ul>
                    <li><i className="icon-link" /></li>
                    <li><i className="icon-import" /></li>
                  </ul>
                </div>
              </div>
              <div className="blog-details-main">
                <ul className="blog-social">
                  <li>9 April 2024</li>
                  <li>by: Admin</li>
                  <li>0 Hits</li>
                </ul>
                <hr />
                <h6 className="blog-bottom-details">{data.description}</h6>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SmallLearningCards;