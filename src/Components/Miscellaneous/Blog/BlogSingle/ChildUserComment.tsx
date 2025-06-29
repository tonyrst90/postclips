import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";

export const ChildUserComment = () => {
  const SingleBlogParagraphs: string = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`;

  return (
    <li>
      <ul>
        <li>
          <div className="d-flex">
            <Image priority width={74} height={74} className="align-self-center" src={`${ImagePath}/blog/9.jpg`} alt="Generic placeholder image" />
            <div className="flex-grow-1">
              <Row>
                <Col xl={12}>
                  <h4 className="mt-0">Jolio Mark<span> ( Designer )</span></h4>
                </Col>
              </Row>
              <p>{SingleBlogParagraphs}</p>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};