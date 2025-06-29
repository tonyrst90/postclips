import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesScrollbars } from "@/Constant";
import { badgeScroll, badgeScrollList } from "@/Data/BonusUi/Scrollable";

const BadgesScrollbar = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={BadgesScrollbars} span={badgeScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
            <ListGroup className="list-group list-group-numbered scroll-rtl">
              <ListGroupItem className="d-flex align-items-start flex-wrap">
                <div className="ms-2 me-auto">Stella Nowland</div>
                <Badge pill color="warning" className="p-2">Freelance</Badge>
              </ListGroupItem>
              {badgeScrollList.map(({ title, color, text }, index) => (
                <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                  <div className="ms-2 me-auto">{title}</div>
                  <Badge color={color} pill className="p-2">{text}</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesScrollbar;
