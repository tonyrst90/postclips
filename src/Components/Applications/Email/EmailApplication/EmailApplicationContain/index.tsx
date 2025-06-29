import { Card, Col, Row } from "reactstrap";
import ReadEmailList from "../../Common/ReadEmailList";
import EmailContent from "./EmailContent";
import EmailTop from "../../Common/EmailTop";
import { useCallback, useState } from "react";

const EmailApplicationContain = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeCallback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <Row>
          <Col xl={4} md={12} className="box-md-12 pr-0">
            <div className="pe-0" />
            <EmailTop />
            <ReadEmailList activeTab={activeTab} activeCallback={activeCallback} />
          </Col>
          <EmailContent activeTab={activeTab} />
        </Row>
      </Card>
    </div>
  );
};

export default EmailApplicationContain;