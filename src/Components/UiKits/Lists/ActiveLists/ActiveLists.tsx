import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ActiveList } from "@/Constant";
import { activeData, activeListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ActiveLists = () => {
  return (
    <Col xl={4} md={6}>
      <Card className='custom-list-group active-list-custom'>
        <CommonCardHeader title={ActiveList} span={activeData} headClass='card-no-border' />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="active bg-warning-light"><i className="icofont icofont-arrow-right"></i>UI Kits</ListGroupItem>
            {activeListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;