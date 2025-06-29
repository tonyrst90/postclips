import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { blogData } from "@/Data/Miscellaneous/Blog/Blog";
import { Card, Col, Row } from "reactstrap";

const BlogWithDetails = () => {
  return (
    <Col xxl={6} className="box-col-60 xl-60">
      {blogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm={5}>
              <RatioImage className="img-fluid sm-100-w" src={`${ImagePath}/blog/blog-${data.image}.jpg`} alt="images" />
            </Col>
            <Col sm={7}>
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> January 2024
                </div>
                <h4>{'Encounter every day.'}</h4>
                <div className="blog-bottom-content">
                  <ul className="blog-social">
                    <li>by: Admin</li>
                    <li>{data.hits} Hits</li>
                  </ul>
                  <hr />
                  <p className="mt-0">A huge part of it is the incomparable beauty you can encounter every day.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;