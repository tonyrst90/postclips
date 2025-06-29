import { AbsoluteCards, ImagePath } from "@/Constant";
import { cardAbsoluteData } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const AbsoluteCard = () => {
  return (
    <>
      {cardAbsoluteData.map(({ className, src, span }, index) => (
        <Col sm={12} xl={6} key={index}>
          <Card className="card-absolute">
            <CardHeader className={className}>
              <h5 className="txt-light">{AbsoluteCards}</h5>
            </CardHeader>
            <CardBody>
              <div className="d-flex list-behavior-1 align-items-center">
                <div className="flex-shrink-0">
                  <picture><img className="tab-img img-fluid" src={`${ImagePath}/${src}`} alt="home" /></picture>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-xl-0 mb-sm-4">{span}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default AbsoluteCard;