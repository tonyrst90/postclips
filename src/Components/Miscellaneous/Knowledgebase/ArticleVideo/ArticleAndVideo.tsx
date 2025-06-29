import { Col, Row } from "reactstrap";
import { LatestArticles } from "@/Constant";
import { ArticleAndVideo1 } from "./ArticleAndVideo1";
import ArticleAndVideo2 from "./ArticleAndVideo2";
import ArticleAndVideo3 from "./ArticleAndVideo3";

const ArticleAndVideo = () => {
  return (
    <Col lg={12} className="faq-articles">
      <div className="header-faq">
        <h3 className="mb-0">{LatestArticles}</h3>
      </div>
      <Row>
        <ArticleAndVideo1 />
        <ArticleAndVideo2 />
        <ArticleAndVideo3 />
      </Row>
    </Col>
  );
};

export default ArticleAndVideo;