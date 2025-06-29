import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { ChildUserComment } from "../ChildUserComment";
import { UserCommentPropsType } from "@/Types/Users.type";

const UserComment: React.FC<UserCommentPropsType> = ({ ImageSrc, userReplay, text }) => {

  return (
    <>
      <li>
        <ul className="mx-0">
          <li>
            <div className="d-flex align-self-center">
              <Image priority width={106} height={106} className="align-self-center" src={`${ImagePath}/blog/${ImageSrc}`} alt="Generic placeholder" />
              <div className="flex-grow-1">
                <Row>
                  <Col md={4} className="xl-100">
                    <h4 className="blog-title mt-0">Jolio Mark<span> ( Designer )</span></h4>
                  </Col>
                  <Col md={8} className="xl-100">
                    <ul className="comment-social float-start float-md-end learning-comment">
                      <li><i className="icofont icofont-thumbs-up"></i>02 Hits</li>
                      <li><i className="icofont icofont-ui-chat"></i>598 Comments</li>
                    </ul>
                  </Col>
                </Row>
                <p>{text}</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
      {userReplay && <ChildUserComment />}
    </>
  );
};

export default UserComment;