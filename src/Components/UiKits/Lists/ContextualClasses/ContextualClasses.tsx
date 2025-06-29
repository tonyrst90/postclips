import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ContextualClassesHeading, Href } from "@/Constant";
import { contextualData, contextualDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ContextualClasses = () => {
  return (
    <Col xl={6} sm={12} className="box-col-6">
      <Card className="height-equal">
        <CommonCardHeader title={ContextualClassesHeading} span={contextualData} headClass='card-no-border pb-0' />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" href={Href} className="list-group-item-action list-light-primary">
              This is Primary bg you can use <em className="txt-primary fw-bold">.list-light-primary</em> class.
            </ListGroupItem>
            {contextualDataList.map((item, index) => (
              <ListGroupItem tag="a" href={Href} className={`list-group-item-action list-light-${item}`} key={index}>
                This is <span className="text-capitalize">{item}</span> bg you can use <em className={`txt-${item} fw-bold`}>.list-light-{item}</em> class.
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClasses;
