import { Card, Col, Row } from "reactstrap";
import { BrowseArticles, knowledgeArticle } from "@/Constant";
import { CategoryDataCardBody } from "./CategoryDataCardBody";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const CategoryData = () => {
  return (
    <Col sm={12}>
      <div className="header-faq">
        <h3 className="mb-0">{knowledgeArticle}</h3>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={BrowseArticles} />
            <CategoryDataCardBody />
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default CategoryData;