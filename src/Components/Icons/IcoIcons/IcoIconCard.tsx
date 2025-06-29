import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconsCommonProps } from "@/Types/Icons.type";
import { Card, CardBody, Col, Row } from "reactstrap";

const IcoIconCard: React.FC<IconsCommonProps> = ({ title, iconType, parentCallback }) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <Card>
      <CommonCardHeader title={title} />
      <CardBody>
        <Row className="icon-lists">
          {iconType.map((item, i) => {
            return (
              <Col sm={6} xs={12} lg={4} key={i} onClick={() => getITag(item)}>
                <i className={`icofont icofont-${item}`}></i> {item}
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
};

export default IcoIconCard;