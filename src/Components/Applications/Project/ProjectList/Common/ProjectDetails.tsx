import { ProjectCommonType } from "@/Types/Project.type";
import { Col, Row } from "reactstrap";

const ProjectDetails: React.FC<ProjectCommonType> = ({ item }) => {
  return (
    <Row className="details">
      <Col xs={6}><span>{'Issues'} </span></Col>
      <Col xs={6} className={`font-${item.badge === "Done" ? "success" : "danger"}`}>
        {item.issue}
      </Col>
      <Col xs={6}><span>{'Resolved'}</span></Col>
      <Col xs={6} className={`font-${item.badge === "Done" ? "success" : "danger"}`}>
        {item.resolved}
      </Col>
      <Col xs={6}><span>{'Comment'}</span></Col>
      <Col xs={6} className={`font-${item.badge === "Done" ? "success" : "danger"}`}>
        {item.comment}
      </Col>
    </Row>
  );
};

export default ProjectDetails;