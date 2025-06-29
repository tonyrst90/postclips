import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListsWithNumber } from "@/Constant";
import { listNumberData, listNumberDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithNumbers = () => {

  return (
    <Col xxl={4} sm={12}>
      <Card className='custom-list-group'>
        <CommonCardHeader title={ListsWithNumber} span={listNumberData} />
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="txt-primary fw-bold">Known for delivery of useful and usable solutions</ListGroupItem>
            {listNumberDataList.map(({ color, text }, index) => (
              <ListGroupItem className={`txt-${color} fw-bold`} key={index}>{text}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithNumbers;