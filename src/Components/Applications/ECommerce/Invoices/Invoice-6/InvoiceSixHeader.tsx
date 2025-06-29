import { Col, Row } from "reactstrap"; 
import CountUp from 'react-countup';
import { PostClips, ImagePath, Invoice } from "@/Constant";
 

const InvoiceSixHeader = () => {
  return (
    <>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <img className="media-object img-80 img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <img className="media-object img-80 img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h3 className="media-heading">{PostClips} </h3>
              <p>
                hello@PostClips.in
                <br />
                <span>289-335-6503</span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h3>
              {Invoice} #<span className="counter"> <CountUp end={1069} duration={3} /></span>
            </h3>
            <p>
              Issued: May<span> 27, 2024</span>
              <br /> Payment Due: June <span>27, 2024</span>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InvoiceSixHeader;
