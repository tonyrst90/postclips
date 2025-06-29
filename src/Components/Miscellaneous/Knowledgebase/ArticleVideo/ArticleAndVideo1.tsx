import { articleAndVideoOne } from "@/Data/Miscellaneous/Knowledgebase/Knowledgebase";
import { Card, CardBody, Col, Row } from "reactstrap";

export const ArticleAndVideo1 = () => {
  return (
    <Col xl={4} md={6}>
      <Row>
        {articleAndVideoOne.map((item, index) => (
          <Col sm={12} key={index}>
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