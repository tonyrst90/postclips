import { articleData } from "@/Data/Miscellaneous/Faq/Faq";
import { Card, CardBody, Col } from "reactstrap";

const Articles = () => {
  return (
    <>
      {articleData.map((item) => (
        <Col xl={4} md={item.md} className="box-col-4" key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Articles;