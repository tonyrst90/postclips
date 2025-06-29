import { articleAndVideoThird } from "@/Data/Miscellaneous/Knowledgebase/Knowledgebase";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleAndVideo3 = () => {
  return (
    <Col xl={4}>
      <Row>
        {articleAndVideoThird.map((item, i) => (
          <Col xl={12} md={item.md} key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h6 className="f-w-600">{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticleAndVideo3;