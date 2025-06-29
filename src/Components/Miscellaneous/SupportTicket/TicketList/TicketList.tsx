import { Row, Col, Card, CardBody, Progress } from "reactstrap";
import CountUp from "react-countup";
import ProfitAndLoss from "./ProfitAndLoss";
import { ticketData } from "@/Data/Miscellaneous/SupportTicket/SupportTicket";

const TicketList = () => {
  return (
    <Row>
      {ticketData.map((item, index) => (
        <Col xl={4} sm={6} className="box-col-6" key={index}>
          <Card className={`ecommerce-widget bg-light-${item.class}`}>
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs={5}>
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} className="mb-1" delay={1} />
                  </h3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase mt-4">
                <Progress className="sm-progress-bar" color={item.class} value={70} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;