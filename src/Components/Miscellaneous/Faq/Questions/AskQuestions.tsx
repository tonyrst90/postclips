import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { MessageSquare, Settings } from "react-feather";
import NavigationOption from "./NavigationOption";
import { AskQuestion, Href, Navigation } from "@/Constant";

const AskQuestions = () => {
  return (
    <Col lg={12}>
      <Card className="card-mb-faq">
        <CardHeader className="faq-header pb-0">
          <h4>{Navigation}</h4>
          <Settings />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <Button color="primary" tag="a" href={Href}>
              <MessageSquare className="m-r-10" />
              {AskQuestion}
            </Button>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AskQuestions;
