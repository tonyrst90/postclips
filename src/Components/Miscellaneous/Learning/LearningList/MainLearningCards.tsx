import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { mainLearningCardData } from "@/Data/Miscellaneous/Learning/Learning";
import { Card, Col, Row } from "reactstrap";

const MainLearningCards = () => {

  return (
    <>
      {mainLearningCardData.map((data, index) => (
        <Col xl={12} key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm={5}>
                <RatioImage className="img-fluid sm-100-w" src={`${ImagePath}/faq/${index + 1}.jpg`} alt="blog-image" />
              </Col>
              <Col sm={7}>
                <div className="blog-details">
                  <div className="blog-date">
                    <span>{data.dateSpan}</span> {data.date}
                  </div>
                  <h3>{data.language}</h3>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>by: {data.learningCardBy}</li>
                      <li>{data.hits} Hits</li>
                    </ul>
                    <hr />
                    <p className="mt-0">{data.languageDescription}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MainLearningCards;