import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import { Col, Row } from "reactstrap";

export const ThirdStyleAboutSection = () => {
  const PainterTourParagraph = "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
  
  return (
    <>
      <p className="block-ellipsis">{PainterTourParagraph}</p>
      <Row className="g-3 mt-4 pictures" id="aniimated-thumbnials-2">
        <Col sm={6}>
          <Link href={Href}>
            <div className="tour-blog">
              <picture><img className="img-fluid rounded" src={`${ImagePath}/other-images/mountain.jpg`} alt="mountain" /></picture>
            </div>
          </Link>
        </Col>
        <Col sm={6}>
          <Link href={Href}>
            <div className="tour-blog">
              <picture><img className="img-fluid rounded" src={`${ImagePath}/other-images/sea.jpg`} alt="sea" /></picture>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
};
