import { articleDataThird } from "@/Data/Miscellaneous/Faq/Faq";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleVideo3 = () => {
  return (
    <Col xl={4}>
      <Row>
        {articleDataThird.map((item, i) => (
          <Col xl={12} md={6} key={i}>
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
export default ArticleVideo3;