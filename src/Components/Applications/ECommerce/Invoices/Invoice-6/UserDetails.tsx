import { ImagePath, ProjectDescription } from "@/Constant";
import { Col, Row } from "reactstrap";
 

const UserDetails = () => {
  return (
    <Row>
      <Col md="4">
        <div className="d-flex">
          <div className="media-left">
            <img className="media-object rounded-circle img-60" src={`${ImagePath}/user/1.jpg`} alt="user" />
          </div>
          <div className="flex-grow-1 m-l-20">
            <h3 className="media-heading">Johan Deo</h3>
            <p>
              JohanDeo@gmail.com
              <br />
              <span>555-555-5555</span>
            </p>
          </div>
        </div>
      </Col>
      <Col md="8">
        <div className="text-md-end" id="project">
          <h3>{ProjectDescription}</h3>
          <p>
            You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To What's Fashionable.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default UserDetails;
