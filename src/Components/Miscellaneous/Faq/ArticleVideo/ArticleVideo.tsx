import { Col, Row } from "reactstrap";
import { ArticleVideo1 } from "./ArticleVideo1";
import ArticleVideo2 from "./ArticleVideo2";
import ArticleVideo3 from "./ArticleVideo3";
import { LatestArticles } from "@/Constant";

const ArticleVideo = () => {
  return (
    <Col lg={12} className="faq-articles">
      <div className="header-faq">
        <h3 className="mb-0">{LatestArticles}</h3>
      </div>
      <Row>
        <ArticleVideo1 />
        <ArticleVideo2 />
        <ArticleVideo3 />
      </Row>
    </Col>
  );
};
export default ArticleVideo;
