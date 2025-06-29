import { Col, Row, TabContent, TabPane } from "reactstrap";
import EmailContentBody from "./EmailContentBody";
import { EmailContentProp } from "@/Types/Email.type";
import { emailList } from "@/Data/Applications/Email";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const EmailContent: React.FC<EmailContentProp> = ({ activeTab }) => {
  return (
    <Col xl={8} md={12} className="box-md-12 pl-0">
      <div className="email-right-aside">
        <div className="email-body radius-left">
          <div className="ps-0">
            <TabContent activeTab={activeTab}>
              {emailList.map((item, index) => (
                <TabPane key={index} tabId={index + 1}>
                  <div className="email-content">
                    <div className="email-top">
                      <Row>
                        <Col md={6} sm={12} className="xl-100">
                          <div className="d-flex">
                            <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} width={48} height={48} alt="user" />
                            <div className="flex-grow-1">
                              <h3 className="p-0">
                                {item.tittle}
                                <small>
                                  <span>({item.date}</span> {item.month}) <span>{'6:00'}</span> {'AM'}
                                </small>
                              </h3>
                              <p>{'Inquiry about our theme pages design.'}</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <EmailContentBody />
                  </div>
                </TabPane>
              ))}
            </TabContent>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default EmailContent;